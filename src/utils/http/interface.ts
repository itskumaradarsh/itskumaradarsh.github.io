export interface IHttpRequest {
  get(url: string): Promise<any>;
  post(url: string, body: object): Promise<any>;
  delete(url: string): Promise<any>;
  put(url: string, body?: any): Promise<any>;
  patch(url: string, body: object): Promise<any>;
}
