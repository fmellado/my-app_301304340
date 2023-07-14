import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

import  appRoutes from './routerConfig';
import { BussinesComponent } from './bussines/bussines.component';
//import { AdminComponent } from './admin/admin.component';
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, ProjectComponent, ContactComponent, ServicesComponent, BussinesComponent],//, AdminComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-0apyuxgw71s4tzna.us.auth0.com',
      clientId: 'JFEp7Rz7rMXlDQJr9ADNWQogDhOlwGLg',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
