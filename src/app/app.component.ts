import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
//import { Router } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app_fmm';
  constructor(public auth : AuthService, private router: Router ){}

  ngOnInit():void {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      if(isAuthenticated){
          this.router.navigate (['/bussines'])
      }
    })
  }

  login() {
    this.auth.loginWithRedirect()
  }
}

