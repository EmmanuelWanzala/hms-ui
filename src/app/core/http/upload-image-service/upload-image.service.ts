import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private http: HttpClient) { }

  public upload(formData) {
    return this.http.post<any>(`${environment.api_url}/accounts/api/upload-profile`, formData);
  }

}
