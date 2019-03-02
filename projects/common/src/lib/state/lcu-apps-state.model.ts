export class LCUAppsState {
  public ActiveApp: LCUAppConfig;

  public ActiveDAFApps: LCUDAFAppConfig[];

  public ActiveAppType: string;

  public Apps: LCUAppConfig[];

  public Loading?: boolean;
}

export class LCUAppConfig {
  public Container?: string;

  public Description?: string;

  public Hosts?: string[];

  public ID?: string;

  public IsReadOnly?: boolean;

  public Name: string;

  public PathRegex: string;

  public Priority?: number;

  public QueryRegex?: string;

  public UserAgentRegex?: string;
}

export class LCUDAFAppConfig {
  public ApplicationID?: string;

  public ID?: string;

  public Priority?: number;
}

export class LCUDAFAPIAppConfig extends LCUDAFAppConfig {
  public APIRoot?: string;

  public InboundPath?: string;

  public Methods?: string;

  public Security?: string;
}

export class LCUDAFViewAppConfig extends LCUDAFAppConfig {
  public BaseHref?: string;

  public NPMPackage?: string;

  public PackageVersion?: string;
}
