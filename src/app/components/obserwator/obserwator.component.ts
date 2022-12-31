import { Component, OnInit } from '@angular/core';
import {ResultObject} from "../../interfaces/result-object";
import {HttpClient} from "@angular/common/http";
import {DesignPatternsClientService} from "../../services/design-patterns-client.service";
import {CookieService} from "../../services/cookie.service";

@Component({
  selector: 'app-obserwator',
  templateUrl: './obserwator.component.html',
  styleUrls: ['./obserwator.component.css']
})
export class ObserwatorComponent implements OnInit {

  public results: ResultObject[] = [];
  name: string = '';
  file: any;

  constructor(private httpClient:HttpClient, private designPatternsService: DesignPatternsClientService) { }

  ngOnInit(): void {
    this.designPatternsService.getResultsList("obserwator").subscribe((results) => {
      this.results = results;
    });
  }

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
    sessionStorage.setItem("obserwator", cookie.cookie);

    let formData = new FormData();
    formData.set("name", this.name);
    formData.set("file", this.file);
    // @ts-ignore
    formData.set("cookie", sessionStorage.getItem("obserwator")); //cookie.cookie

    this.httpClient.post('http://localhost:8080/testing/8', formData)
      .subscribe((response) =>{});
  }

}
