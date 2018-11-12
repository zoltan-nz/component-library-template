declare class LegacyTracker {
  public readonly version: string;

  /**
   * @description Track server in format: http://some.url/folder/
   */
  public server: string;
  public clientId: string;
  public pageName: string;
  public linkName: string;

  constructor();

  public trackPage(): void;
  public trackLink(): void;

  private url(): string;
}
