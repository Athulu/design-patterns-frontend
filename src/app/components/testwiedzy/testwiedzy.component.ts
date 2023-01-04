import { Component, OnInit } from '@angular/core';
import {ControlValueAccessor} from "@angular/forms";

@Component({
  selector: 'app-testwiedzy',
  templateUrl: './testwiedzy.component.html',
  styleUrls: ['./testwiedzy.component.css']
})



export class TestwiedzyComponent implements OnInit{
  data:any={}
  // <!--1,3,1,4,2,2,3,4,1,3-->
  odp: string[] = ['1', '3', '1', '4', '2', '2', '3', '4', '1', '3'];
  punkty = 0;
  constructor() { }

  ngOnInit(): void {
  }

  getValues(){
    for (let i = 0; i < 10; i++) {
      if(this.data[i] == this.odp[i]){
        this.punkty++;
      }
      sessionStorage.setItem("testPoints", this.punkty.toString());
    }
  }
}
