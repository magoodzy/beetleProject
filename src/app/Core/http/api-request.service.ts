import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {

  // base url to be used to call the APIs
  baseUrl="https://192.168.1.1";
      


  constructor(private http: HttpClient) {}


  
  // Generic API Methods to be used across the project
  post(url: string, params: {} = {}, headers?: {}): Observable<any> {
    const httpOptions = {
      headers,
    };
    return this.http.post<any>(this.baseUrl + url, params, headers);
  }

  put(url: string, params: {} = {}, headers?: {}): Observable<any> {
    const httpOptions = {
      headers,
    };
    return this.http.put<any>(this.baseUrl + url, params, httpOptions);
  }

  get(url: string, headers?: any): Observable<any> {
    let httpOptions = {
      headers,
    };
    if (headers) {
      httpOptions = { ...headers, params: headers.queryParams };
    }
    return this.http.get<any>(this.baseUrl + url, httpOptions);
  }

  delete(url: string, headers?: {}): Observable<any> {
    const httpOptions = {
      headers,
    };
    return this.http.delete<any>(this.baseUrl + url, httpOptions);
  }

  /**
   * custom request method to handle custom api requests like delete with a body
   * @param method ex delete
   * @param url ex users
   * @param body ex {ids: [5,6,7]}
   * @param headers request headers optional
   * @param params additional params
   * @param responseType change response type
   */

  request(
    method: string,
    url: string,
    body: {} = {},
    headers?: any,
    params?: any,
    responseType?: any
  ): Observable<any> {
    return this.http.request(method, url, {
      body,
      headers,
      params,
      responseType,
    });
  }

  // .pipe(timeout(30000));
}
