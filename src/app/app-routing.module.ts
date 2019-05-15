import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { AddUserComponent } from './components/dashboard/add-user/add-user.component';
import { AdminUserComponent } from './components/dashboard/admin-user/admin-user.component';
import { AddPropertyComponent } from './components/dashboard/add-property/add-property.component';
import { AddVehiclesComponent } from './components/dashboard/add-vehicles/add-vehicles.component';

const routes: Routes = [
  {path : '', redirectTo: '/login', pathMatch: 'full'},
  {path : 'login', component : LoginComponent},
  {path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'addUser', component: AddUserComponent },
      { path: 'adminUser', component: AdminUserComponent },
      { path: 'addProperty', component: AddPropertyComponent },
      { path: 'AddVehicles', component: AddVehiclesComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
