import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-bussines',
  templateUrl: './bussines.component.html',
  styleUrls: ['./bussines.component.scss']
})
export class BussinesComponent  implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    }
  logOut() {
    this.auth.logout()
  }
}
