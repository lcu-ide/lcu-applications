import { Application, DAFApplicationConfig } from '@lcu-ide/common';

export class LCUAppsState {
  public ActiveApp: Application;

  public ActiveDAFApps: DAFApplicationConfig[];

  public ActiveAppType: string;

  public Apps: Application[];

  public DefaultApps: Application[];

  public DefaultAppsEnabled?: boolean;

  public IsAppsSettings?: boolean;

  public Loading?: boolean;
}
