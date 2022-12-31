import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  constructor(private httpClient: HttpClient) { }

  public downloadFile(){
    return this.httpClient.get("http://localhost:4200/api/Employee/Export", {observe:'response', responseType:'blob'})
  }
}
