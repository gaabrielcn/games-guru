import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({providedIn: 'root'})
export class CrudService {
  constructor(private http: HttpClient) {
    }

  get(path: string, id: string | null = null, params?: { [key: string]: any } | null, authenticationParms: boolean = true) {
    return this.http.get(`${environment.apiUrl}/${path}`, {params: this.addParams(params, authenticationParms, id)});
  }

  post(path: string, data: object, params?: { [key: string]: string }, authenticationParms?: boolean) {
    return this.http.post(`${environment.apiUrl}/${path}`, data, {params: this.addParams(params, authenticationParms)});
  }

  put(path: string, data: object, params?: { [key: string]: string }, authenticationParms?: boolean) {
    return this.http.put(`${environment.apiUrl}/${path}`, data, {params: this.addParams(params, authenticationParms)});
  }

  delete(path: string, id?: string, params?: { [key: string]: string }, authenticationParms?: boolean) {
    return this.http.delete(`${environment.apiUrl}/${path}` + (id ? '/' + id : ''), {params: this.addParams(params, authenticationParms)})
  }


  addParams(params?: { [key: string]: any } | null, authenticationParams?: boolean, id: string | null = null) {
    let httpParams : HttpParams = new HttpParams();

    if(id) {
      httpParams = httpParams.append('id', id);
    }

    if(params) {
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          httpParams = httpParams.append(key, params[key]);
        }
      }
    }
    if(authenticationParams) {
      httpParams = httpParams.append(environment.apiKey.name, environment.apiKey.value)
    }
    return httpParams;
  }



}
