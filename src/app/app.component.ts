import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'design-patterns-frontend';
  constructor( private router: Router) {
  }

  isOnMainPage(): boolean {
    let url = this.router.url;
    return url == "/";
  }


}
