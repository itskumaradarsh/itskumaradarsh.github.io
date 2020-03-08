import axios, { AxiosRequestConfig } from 'axios';
import { IHttpRequest } from './interface';

const config: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
    // 'access_token': Cookies.get('access_token'),
    // TODO: Add access_token later to header
  },
};

export const ReactHttpRequest: IHttpRequest = {
  get: (url: string): Promise<any> => {
    return axios.get(url, config);
  },
  post: (url: string, body: any): Promise<any> => {
    return axios.post(url, body, config);
  },
  delete: (url: string): Promise<any> => {
    return axios.delete(url, config);
  },
  put: (url: string, body: any): Promise<any> => {
    return axios.put(url, body, config);
  },
  patch: (url: string, body: any): Promise<any> => {
    return axios.patch(url, body, config);
  },
};

export default ReactHttpRequest;
