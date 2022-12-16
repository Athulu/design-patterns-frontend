import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DesignPatternsClientService} from "../../services/design-patterns-client.service";

@Component({
  selector: 'app-fabrykamd',
  templateUrl: './fabrykamd.component.html',
  styleUrls: ['./fabrykamd.component.css']
})
export class FabrykamdComponent implements OnInit {

  name: string = '';
  file: any;

  constructor(private httpClient:HttpClient, private designPatternsService: DesignPatternsClientService) { }

  ngOnInit(): void {
  }

  getFile(event:any){
    this.file = event.target.files[0];
    console.log('file', this.file);
  }

  submitData(){
    let formData = new FormData();
    formData.set("name", this.name);
    formData.set("file", this.file);

    this.httpClient.post('http://localhost:8080/testing/2', formData)
      .subscribe((response) =>{});
  }
}
