import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from "@angular/common/http";
import { Observable } from "rxjs";
import { TaskObject } from "../interfaces/task-object";
import {SolutionObject} from "../interfaces/solution-object";
import {ResultObject} from "../interfaces/result-object";

@Injectable({
  providedIn: 'root'
})
export class DesignPatternsClientService {

  constructor(private httpClient: HttpClient) { }

  public getDesignPatternsList(): Observable<TaskObject[]>{
    return this.httpClient.get<TaskObject[]>("http://localhost:8080/tasks");
  }

  public getDesignPatternsSolution(): Observable<SolutionObject>{
    return this.httpClient.get<SolutionObject>("http://localhost:8080/solutions/task/1");
  }

  public getResultsList(designPatternKey: string): Observable<ResultObject[]> {
    var cookie = sessionStorage.getItem(designPatternKey);
    var formData: FormData = new FormData();
    formData.append('cookie', `${cookie}`);
    return this.httpClient.post<ResultObject[]>("http://localhost:8080/results/cookie", formData);
  }

  // public getResultsList(designPatternKey:string): Observable<ResultObject[]>{
  //   var cookie = sessionStorage.getItem(designPatternKey);
  //   var formData: FormData = new FormData();
  //   formData.append('cookie', '560ec2b66fca632bd04ead590db7083c');
  //
  //   // <ResultObject[]>(`http://localhost:8080/results/cookie?cookie=560ec2b66fca632bd04ead590db7083c`);
  //   // return this.httpClient.post("http://localhost:8080/results/cookie", formData);
  //   const response = fetch('http://localhost:8080/results/cookie', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       cookie: `${cookie}`,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //   });
  //
  //   // const result = Observable<ResultObject[]>;
  //   return response;
  // }

}


