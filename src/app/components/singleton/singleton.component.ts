import { Component, OnInit } from '@angular/core';
import {DownloadFileService} from "../../services/download-file.service";
import {HttpClient} from "@angular/common/http";
import {DesignPatternsClientService} from "../../services/design-patterns-client.service";
import {SolutionObject} from "../../interfaces/solution-object";

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.css']
})
export class SingletonComponent implements OnInit {
  constructor(private httpClient:HttpClient, private designPatternsService: DesignPatternsClientService) { }

  // @ts-ignore
  solution: SolutionObject;

  ngOnInit(): void {
  }

  name: string = '';
  file: any;
  // isDuringTest = true;

  getName(name:string){
    this.name = name;
  }

  getFile(event:any){
    this.file = event.target.files[0];
    console.log('file', this.file);
  }

  submitData(){
    // this.isDuringTest = true;
    // this.isTesting()
    let formData = new FormData();
    formData.set("name", this.name);
    formData.set("file", this.file);

    this.httpClient.post('http://localhost:8080/testing/1', formData)
      .subscribe((response) =>{});
    // this.isDuringTest = false;
    // this.isTesting()
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
