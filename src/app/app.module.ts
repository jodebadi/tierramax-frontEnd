/*
  ANGULAR IMPORTS
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


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
  APP SERVICES
*/
import { UserService } from './services/user.service';
import { PropertyService } from './services/property.service';
/*
  APP COMPONENTS
*/
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { AddUserComponent } from './components/dashboard/add-user/add-user.component';
import { SuccessfullyComponent } from './modals/successfully/successfully.component';
import { AdminUserComponent } from './components/dashboard/admin-user/admin-user.component';
import { ErrorComponent } from './modals/error/error.component';
import { AddPropertyComponent } from './components/dashboard/add-property/add-property.component';
import { AddVehiclesComponent } from './components/dashboard/add-vehicles/add-vehicles.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    AddUserComponent,
    SuccessfullyComponent,
    AdminUserComponent,
    ErrorComponent,
    AddPropertyComponent,
    AddVehiclesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModulesPro.forRoot(),
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    MDBSpinningPreloader,
    UserService,
    PropertyService
  ],
  entryComponents: [ SuccessfullyComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
