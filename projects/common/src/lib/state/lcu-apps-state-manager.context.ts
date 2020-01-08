import { Injectable, Injector } from '@angular/core';
import { StateManagerContext } from '@lcu/common';
import { Application, DAFAPIApplicationConfig, DAFApplicationConfig } from '@lcu/common';
import { LCUAppsState, AppPriorityModel } from './lcu-apps-state.model';

@Injectable({
  providedIn: 'root'
})
export class LcuAppsStateManagerContext extends StateManagerContext<LCUAppsState> {
  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  API Methods
  public AddDAFAPIConfig(app: DAFAPIApplicationConfig) {
    this.Execute({
      Arguments: {
        DAFApp: app
      },
      Type: 'add-daf-api-app'
    });
  }

  public RemoveDAFAPIConfig(app: DAFAPIApplicationConfig) {
    this.Execute({
      Arguments: {
        DAFApp: app
      },
      Type: 'remove-daf-api-app'
    });
  }

  public Save(app: Application) {
    this.Execute({
      Arguments: {
        Application: app
      },
      Type: 'save-app'
    });
  }

  public SaveDAFApps(dafApps: DAFApplicationConfig[]) {
    this.Execute({
      Arguments: {
        DAFApps: dafApps
      },
      Type: 'save-daf-apps'
    });
  }

  public SavePriorities(apps: AppPriorityModel[]) {
    this.Execute({
      Arguments: {
        Apps: apps
      },
      Type: 'save-app-priorities'
    });
  }

  public SetActive(appId: string) {
    this.Execute({
      Arguments: {
        ApplicationID: appId
      },
      Type: 'set-active'
    });
  }

  public SetActiveAppType(appType: string) {
    this.Execute({
      Arguments: {
        Type: appType
      },
      Type: 'set-active-app-type'
    });
  }

  public SetAppsNavState(state: string) {
    this.Execute({
      Arguments: {
        State: state
      },
      Type: 'set-apps-nav-state'
    });
  }

  public SetDefaultApps(state: boolean) {
    this.Execute({
      Arguments: {
        State: state
      },
      Type: 'set-default-apps'
    });
  }

  public ToggleAppAsDefault(appId: string, isAdd: boolean) {
    this.Execute({
      Arguments: {
        AppID: appId,
        IsAdd: isAdd
      },
      Type: 'toggle-app-as-default'
    });
  }

  public ToggleAppsSettings() {
    this.Execute({
      Arguments: {},
      Type: 'toggle-apps-settings'
    });
  }

  //  Helpers
  protected defaultValue() {
    return <LCUAppsState>{ Loading: true };
  }

  protected async loadStateKey() {
    return 'main';
  }

  protected async loadStateName() {
    return 'lcu-apps';
  }
}
