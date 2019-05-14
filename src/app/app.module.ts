/*
  ANGULAR IMPORTS
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*
  MDBOOSTRAP IMPORTS
*/
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

/*
  APP ROUTING
*/
import { AppRoutingModule } from './app-routing.module';

/*
  APP COMPONENTS
*/
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModulesPro.forRoot(),
  ],
  providers: [
    MDBSpinningPreloader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
