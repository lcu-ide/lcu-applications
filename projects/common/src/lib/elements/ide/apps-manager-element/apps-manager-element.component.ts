import { Component, OnInit, Injector, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { LCUElementContext, LcuElementComponent, DAFViewApplicationConfig } from '@lcu-ide/common';
import { LcuAppsStateManagerContext } from '../../../state/lcu-apps-state-manager.context';
import { Application, DAFAPIApplicationConfig, DAFApplicationConfig } from '@lcu-ide/common';
import { LCUAppsState } from '../../../state/lcu-apps-state.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDrawer, MatCheckboxChange } from '@angular/material';
import { DropListRef, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { debounceTime, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

export class AppsManagerElementState {
  public Config: LCUAppsState;
}

export class AppsManagerContext extends LCUElementContext<AppsManagerElementState> {}

export const SELECTOR_APPS_MANAGER_ELEMENT = 'lcu-apps-manager-element';

@Component({
  selector: SELECTOR_APPS_MANAGER_ELEMENT,
  templateUrl: './apps-manager-element.component.html',
  styleUrls: ['./apps-manager-element.component.scss']
})
export class AppsManagerElementComponent extends LcuElementComponent<AppsManagerContext> implements OnInit {
  //  Fields
  protected dropSub: Subscription;

  protected stateInit: boolean;

  //  Properties
  public get ActiveDAFViewApp(): DAFViewApplicationConfig {
    return this.State.ActiveDAFApps && this.State.ActiveDAFApps.length > 0 ? this.State.ActiveDAFApps[0] : {};
  }

  public get ActiveDAFAPIApps(): DAFAPIApplicationConfig[] {
    return this.State.ActiveDAFApps && this.State.ActiveDAFApps.length > 0 ? this.State.ActiveDAFApps : [];
  }

  public DAFViewAppFormGroup: FormGroup;

  @ViewChild(MatDrawer)
  public Drawer: MatDrawer;

  @ViewChild(DropListRef)
  public Drops: DropListRef;

  public NewDAFAPIAPIRoot: string;

  public NewDAFAPIInboundPath: string;

  public NewDAFAPIMethods: string;

  public NewDAFAPISecurity: string;

  public SaveAppFormGroup: FormGroup;

  public SavingApp: boolean;

  public get ShowContainer(): boolean {
    return !this.State.Loading || (this.State.Apps && this.State.Apps.length > 0);
  }

  public State: LCUAppsState;

  //  Constructors
  constructor(protected injector: Injector, protected formBldr: FormBuilder, protected state: LcuAppsStateManagerContext) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();

    this.SaveAppFormGroup = this.formBldr.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      path: ['', Validators.required],
      priority: ['', Validators.required]
    });

    this.DAFViewAppFormGroup = this.formBldr.group({
      baseHref: ['', Validators.required],
      npmPkg: ['', Validators.required],
      pkgVer: ['', Validators.required]
    });

    this.state.Context.subscribe(state => {
      this.State = state;

      this.handleStateChange();
    });
  }

  //  API Methods
  public AddNewDAFAPI() {
    this.AddAPI({
      APIRoot: this.NewDAFAPIAPIRoot,
      InboundPath: this.NewDAFAPIAPIRoot,
      Methods: this.NewDAFAPIAPIRoot,
      Security: this.NewDAFAPIAPIRoot
    });
  }

  public AddAPI(apiApp: DAFAPIApplicationConfig) {
    this.State.Loading = true;

    this.state.AddDAFAPIConfig(apiApp);
  }

  public AppPriorityDrop(event: CdkDragDrop<Application, any>) {
    moveItemInArray(this.State.AppPriorities, event.previousIndex, event.currentIndex);
  }

  public IsDefaultApp(appId: string) {
    return this.State.DefaultApps && this.State.DefaultApps.some(da => da.ID === appId);
  }

  public RemoveAPI(apiApp: DAFAPIApplicationConfig) {
    if (confirm(`Are you sure you want to remove the api config @ '${apiApp.InboundPath}' for '${apiApp.APIRoot}'?`)) {
      this.State.Loading = true;

      this.state.RemoveDAFAPIConfig(apiApp);
    }
  }

  public SaveApp() {
    this.State.Loading = true;

    this.state.Save({
      ...(this.State.ActiveApp || {}),
      Name: this.SaveAppFormGroup.controls.name.value,
      Description: this.SaveAppFormGroup.controls.desc.value,
      PathRegex: this.SaveAppFormGroup.controls.path.value,
      Priority: this.SaveAppFormGroup.controls.priority.value
    });
  }

  public SaveAppPriorities() {
    this.State.Loading = true;

    this.state.SavePriorities(this.State.AppPriorities);
  }

  public SaveDAFAPIApps() {
    this.SaveDAFApps(this.State.ActiveDAFApps);
  }

  public SaveDAFApps(dafApps: DAFApplicationConfig[]) {
    this.State.Loading = true;

    this.state.SaveDAFApps(dafApps);
  }

  public SaveDAFViewApp() {
    this.ActiveDAFViewApp.BaseHref = this.DAFViewAppFormGroup.controls.baseHref.value;

    this.ActiveDAFViewApp.NPMPackage = this.DAFViewAppFormGroup.controls.npmPkg.value;

    this.ActiveDAFViewApp.PackageVersion = this.DAFViewAppFormGroup.controls.pkgVer.value;

    this.SaveDAFApps(this.State.ActiveDAFApps);
  }

  public Select(appId: string) {
    this.State.Loading = true;

    this.state.SetActive(appId);
  }

  public SetAppType(appType: string) {
    this.State.Loading = true;

    this.state.SetActiveAppType(appType);
  }

  public SetAppsNavState(state: string) {
    this.State.Loading = true;

    this.state.SetAppsNavState(state);
  }

  public SetDefaultApps(state: boolean) {
    this.State.Loading = true;

    this.state.SetDefaultApps(state);
  }

  public ToggleAppAsDefault(appId: string, event: MatCheckboxChange) {
    this.State.Loading = true;

    this.state.ToggleAppAsDefault(appId, event.checked);
  }

  public ToggleAppsSettings() {
    this.State.Loading = true;

    this.state.ToggleAppsSettings();
  }

  public ToggleSavingApp() {
    //  TODO:  Move to state action
    this.SavingApp = !this.SavingApp;

    if (this.SavingApp) {
      this.Select(null);
    }
  }

  //  Helpers
  protected handleStateChange() {
    if (!this.stateInit && this.Drawer) {
      this.Drawer.open();

      this.stateInit = true;
    }

    // if (!this.dropSub && this.Drops) {
    //   this.dropSub = this.Drops.dropped
    //     .pipe(
    //       map(event => {
    //         moveItemInArray(this.State.Apps, event.previousIndex, event.currentIndex);
    //       }),
    //       debounceTime(1250)
    //     )
    //     .subscribe(event => {
    //       console.log(this.State.Apps);
    //     });
    // }

    this.NewDAFAPIAPIRoot = '';

    this.NewDAFAPIInboundPath = '';

    this.NewDAFAPIMethods = '';

    this.NewDAFAPISecurity = '';

    if (this.SaveAppFormGroup) {
      if (this.State.ActiveApp) {
        this.SaveAppFormGroup.controls.name.setValue(this.State.ActiveApp.Name);

        this.SaveAppFormGroup.controls.path.setValue(this.State.ActiveApp.PathRegex);

        this.SaveAppFormGroup.controls.priority.setValue(this.State.ActiveApp.Priority);

        this.SaveAppFormGroup.controls.desc.setValue(this.State.ActiveApp.Description);
      } else if (this.SaveAppFormGroup) {
        this.SaveAppFormGroup.reset();
      }
    }

    if (this.DAFViewAppFormGroup) {
      if (this.State.ActiveApp) {
        this.DAFViewAppFormGroup.controls.baseHref.setValue(this.ActiveDAFViewApp.BaseHref);

        this.DAFViewAppFormGroup.controls.npmPkg.setValue(this.ActiveDAFViewApp.NPMPackage);

        this.DAFViewAppFormGroup.controls.pkgVer.setValue(this.ActiveDAFViewApp.PackageVersion);
      } else if (this.DAFViewAppFormGroup) {
        this.DAFViewAppFormGroup.reset();
      }
    }
  }
}
