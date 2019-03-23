import { Component, OnInit, Input, EventEmitter, OnChanges, SimpleChanges, ViewChild, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDrawer } from '@angular/material';
import { LCUAppsState, LCUAppConfig, LCUDAFViewAppConfig, LCUDAFAPIAppConfig, LCUDAFAppConfig } from '../../../state/lcu-apps-state.model';

@Component({
  selector: 'lcu-apps-manager',
  templateUrl: './apps-manager.component.html',
  styleUrls: ['./apps-manager.component.scss']
})
export class AppsManagerComponent implements OnChanges, OnInit {
  //  Fields
  protected stateInit: boolean;

  //  Properties
  public get ActiveDAFViewApp(): LCUDAFViewAppConfig {
    return this.State.ActiveDAFApps && this.State.ActiveDAFApps.length > 0 ? this.State.ActiveDAFApps[0] : {};
  }

  public get ActiveDAFAPIApps(): LCUDAFAPIAppConfig[] {
    return this.State.ActiveDAFApps && this.State.ActiveDAFApps.length > 0 ? this.State.ActiveDAFApps : [];
  }

  @Output('add-api')
  public AddAPI: EventEmitter<LCUDAFAPIAppConfig>;

  public DAFViewAppFormGroup: FormGroup;

  @ViewChild(MatDrawer)
  public Drawer: MatDrawer;

  public NewDAFAPIAPIRoot: string;

  public NewDAFAPIInboundPath: string;

  public NewDAFAPIMethods: string;

  public NewDAFAPISecurity: string;

  @Output('remove-api')
  public RemoveAPI: EventEmitter<LCUDAFAPIAppConfig>;

  @Output('save-app')
  public SaveApp: EventEmitter<LCUAppConfig>;

  public SaveAppFormGroup: FormGroup;

  @Output('save-daf-apps')
  public SaveDAFAppConfigs: EventEmitter<LCUDAFAppConfig[]>;

  public SavingApp: boolean;

  @Output('select-app')
  public Select: EventEmitter<string>;

  @Output('set-app-type')
  public SetAppTypeEvent: EventEmitter<string>;

  @Input('state')
  public State: LCUAppsState;

  public get ShowContainer(): boolean {
    return !this.State.Loading || (this.State.Apps && this.State.Apps.length > 0);
  }

  //  Constructors
  constructor(protected formBldr: FormBuilder) {
    this.AddAPI = new EventEmitter();

    this.RemoveAPI = new EventEmitter();

    this.SaveApp = new EventEmitter();

    this.SaveDAFAppConfigs = new EventEmitter();

    this.Select = new EventEmitter();

    this.SetAppTypeEvent = new EventEmitter();
  }

  //  Life Cycle
  public ngOnChanges(_: SimpleChanges) {
    if (_['State']) {
      // !this.stateInit &&
      if (this.Drawer) {
        this.Drawer.open();

        this.stateInit = true;
      }

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

  public ngOnInit() {
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
  }

  //  API Methods
  public AddNewDAFAPI() {
    this.AddAPI.emit({
      APIRoot: this.NewDAFAPIAPIRoot,
      InboundPath: this.NewDAFAPIAPIRoot,
      Methods: this.NewDAFAPIAPIRoot,
      Security: this.NewDAFAPIAPIRoot
    });
  }

  public EmitSaveApp() {
    this.SaveApp.emit({
      ...(this.State.ActiveApp || {}),
      Name: this.SaveAppFormGroup.controls.name.value,
      Description: this.SaveAppFormGroup.controls.desc.value,
      PathRegex: this.SaveAppFormGroup.controls.path.value,
      Priority: this.SaveAppFormGroup.controls.priority.value
    });
  }

  public RemoveDAFAPI(dafApi: LCUDAFAPIAppConfig) {
    if (confirm(`Are you sure you want to remove the api config @ '${dafApi.InboundPath}' for '${dafApi.APIRoot}'?`)) {
      this.RemoveAPI.emit(dafApi);
    }
  }

  public SaveDAFViewApp() {
    if (!this.State.ActiveDAFApps || this.State.ActiveDAFApps.length === 0) {
      this.State.ActiveDAFApps.push({});
    }

    this.ActiveDAFViewApp.BaseHref = this.DAFViewAppFormGroup.controls.baseHref.value;

    this.ActiveDAFViewApp.NPMPackage = this.DAFViewAppFormGroup.controls.npmPkg.value;

    this.ActiveDAFViewApp.PackageVersion = this.DAFViewAppFormGroup.controls.pkgVer.value;

    this.SaveDAFAppConfigs.emit(this.State.ActiveDAFApps);
  }

  public SaveDAFAPIApps() {
    this.SaveDAFAppConfigs.emit(this.State.ActiveDAFApps);
  }

  public SelectApp(appId: string) {
    this.SavingApp = false;

    this.Select.emit(appId);
  }

  public SetAppType(appType: string) {
    this.SetAppTypeEvent.emit(appType);
  }

  public ToggleSavingApp() {
    this.SavingApp = !this.SavingApp;

    if (this.SavingApp) {
      this.Select.emit(null);
    }
  }

  //  Helpers
}
