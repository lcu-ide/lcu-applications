import { Application, DAFApplicationConfig } from '@lcu-ide/common';

export class LCUAppsState {
  public ActiveApp: Application;

  public ActiveDAFApps: DAFApplicationConfig[];

  public ActiveAppType: string;

  public Apps: Application[];

  public AppPriorities: AppPriorityModel[];

  public AppsNavState?: string;

  public DefaultApps: Application[];

  public DefaultAppsEnabled?: boolean;

  public IsAppsSettings?: boolean;

  public Loading?: boolean;
}

export class AppPriorityModel {
  public AppziD: string;

  public IsDefault: boolean;

  public Name: string;

  public Path: string;

  public Priority: number;
}
