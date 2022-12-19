import { Component, OnInit } from '@angular/core';
import {ResultObject} from "../../interfaces/result-object";
import {HttpClient} from "@angular/common/http";
import {DesignPatternsClientService} from "../../services/design-patterns-client.service";
import {CookieService} from "../../services/cookie.service";

@Component({
  selector: 'app-fasada',
  templateUrl: './fasada.component.html',
  styleUrls: ['./fasada.component.css']
})
export class FasadaComponent implements OnInit {

  public results: ResultObject[] = [];
  name: string = '';
  file: any;

  constructor(private httpClient:HttpClient, private designPatternsService: DesignPatternsClientService) { }

  ngOnInit(): void {
    this.designPatternsService.getResultsList("fasada").subscribe((results) => {
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
    sessionStorage.setItem("fasada", cookie.cookie);

    let formData = new FormData();
    formData.set("name", this.name);
    formData.set("file", this.file);
    // @ts-ignore
    formData.set("cookie", sessionStorage.getItem("fasada")); //cookie.cookie

    this.httpClient.post('http://localhost:8080/testing/4', formData)
      .subscribe((response) =>{});
  }

}
