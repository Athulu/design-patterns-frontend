import { Component, OnInit } from '@angular/core';
import {DownloadFileService} from "../../services/download-file.service";
import {HttpClient} from "@angular/common/http";
import {DesignPatternsClientService} from "../../services/design-patterns-client.service";
import {SolutionObject} from "../../interfaces/solution-object";
import {CookieService} from "../../services/cookie.service";
import {ResultObject} from "../../interfaces/result-object";

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.css']
})
export class SingletonComponent implements OnInit {
  constructor(private httpClient:HttpClient, private designPatternsService: DesignPatternsClientService, private cookieService:CookieService) { }

  // @ts-ignore
  public results: ResultObject[] = [];

  ngOnInit(): void {
    this.designPatternsService.getResultsList("singleton").subscribe((results) => {
      this.results = results;
    });
  }
  name: string = '';
  file: any;
  cookie: any;

  IsListEmpty(): boolean{
    if(this.results.length < 1){
      return false;
    }else {
      return true;
    }
  }

  getFile(event:any){
    this.file = event.target.files[0];
    console.log('file', this.file);
  }

  submitData(){
    const cookie = new CookieService();
    sessionStorage.setItem("singleton", cookie.cookie);

    let formData = new FormData();
    formData.set("name", this.name);
    formData.set("file", this.file);
    // @ts-ignore
    formData.set("cookie", sessionStorage.getItem("singleton")); //cookie.cookie

    this.httpClient.post('http://localhost:8080/testing/1', formData)
      .subscribe((response) =>{});
  }

  // checkResult(){
  //   this.designPatternsService.getDesignPatternsSolution().subscribe((solution) => {
  //     this.solution = solution;
  //   });
  // }

  // isTesting(): boolean{
  //   if(this.isDuringTest) return true;
  //   else return false;
  // }

}
