export const DEFAULT_SERVER = 'http://localhost/tracker';
export const DEFAULT_CLIENT_ID = 'CLIENT_ID';

export default interface AdapterConfig {
  server?: string;
  clientId?: string;
}
