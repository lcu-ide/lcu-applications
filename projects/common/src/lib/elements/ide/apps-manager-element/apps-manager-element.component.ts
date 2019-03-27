import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu-ide/common';
import { LcuAppsStateManagerContext } from '../../../state/lcu-apps-state-manager.context';
import { Application, DAFAPIApplicationConfig, DAFApplicationConfig } from '@lcu-ide/common';
import { LCUAppsState } from '../../../state/lcu-apps-state.model';

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
  //  Properties
  public State: LCUAppsState;

  //  Constructors
  constructor(protected injector: Injector, protected state: LcuAppsStateManagerContext) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();

    this.state.Context.subscribe(state => {
      this.State = state;
    });
  }

  //  API Methods
  public AddAPI(apiApp: DAFAPIApplicationConfig) {
    this.State.Loading = true;

    this.state.AddDAFAPIConfig(apiApp);
  }

  public RemoveAPI(apiApp: DAFAPIApplicationConfig) {
    this.State.Loading = true;

    this.state.RemoveDAFAPIConfig(apiApp);
  }

  public SaveApp(app: Application) {
    this.State.Loading = true;

    this.state.Save(app);
  }

  public SaveDAFApps(dafApps: DAFApplicationConfig[]) {
    this.State.Loading = true;

    this.state.SaveDAFApps(dafApps);
  }

  public Select(appId: string) {
    this.State.Loading = true;

    this.state.SetActive(appId);
  }

  public SetAppType(appType: string) {
    this.State.Loading = true;

    this.state.SetActiveAppType(appType);
  }
}
