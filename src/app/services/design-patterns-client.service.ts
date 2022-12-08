import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from "@angular/common/http";
import { Observable } from "rxjs";
import { TaskObject } from "../interfaces/task-object";

@Injectable({
  providedIn: 'root'
})
export class DesignPatternsClientService {

  constructor(private httpClient: HttpClient) { }

  public getDesignPatternsList(): Observable<TaskObject[]>{
    return this.httpClient.get<TaskObject[]>("http://localhost:8080/tasks");
  }
}


