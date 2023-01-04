import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wynik',
  templateUrl: './wynik.component.html',
  styleUrls: ['./wynik.component.css']
})
export class WynikComponent implements OnInit {

  constructor() { }

  punkty: number = 0;

  ngOnInit(): void {
    this.punkty = Number(sessionStorage.getItem("testPoints"));
    this.punkty *= 10;
  }
}
