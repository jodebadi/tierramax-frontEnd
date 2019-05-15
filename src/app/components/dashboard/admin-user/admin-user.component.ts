import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../services/user.service';
import { User } from 'src/app/Model/user.model';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss'],
  providers: [ UserService ]
})
export class AdminUserComponent implements OnInit {

  elements: any = [];
  previous: any = [];
  headElements = ['Id', 'Nombre', 'Apellido', 'Correo', 'Teléfono', 'Tipo de Cuenta', 'Activo'];

  chooseFilter: any;
  filterList: any;
  UsersList: Array<User>;

  shwName: boolean;
  shwLastName: boolean;
  shwEmail: boolean;
  shwPhone: boolean;
  shwAccountType: boolean;
  shwBtnFilter: boolean;

  constructor(private ServUser: UserService) {
    this.chooseFilter = [
      {value : 1, name: 'Nombre', show : true},
      {value : 2, name: 'Apellido', show : true},
      {value : 3, name: 'Correo', show : true},
      {value : 4, name: 'Teléfono', show : true},
      {value : 5, name: 'Tipo de cuenta', show : true}
    ];
    this.filterList = [];
  }

  ngOnInit() {
    this._fnHideAllFiltersDiv();
  }

  _addUsersToTable(users) {
    this.elements = [];

    if (users.length > 0) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < users.length; i++) {

        if (users[i].userType == 1){
          users[i].userType = 'Administrador';
        } else if (users[i].userType == 2) {
          users[i].userType = 'Vendedor';
        }
        const user = {
          userId: users[i].userId,
          name: users[i].name,
          lastname: users[i].lastname,
          email: users[i].email,
          phone: users[i].phone,
          password: users[i].password,
          userType: users[i].userType,
          createdBy: users[i].createdBy,
          createDate: users[i].createDate,
          available: users[i].available,
          changes: users[i].changes
        };

        this.elements.push(user);
      }
    }

  }

  _fnHideAllFiltersDiv() {
    this.shwName = false;
    this.shwLastName = false;
    this.shwEmail = false;
    this.shwPhone = false;
    this.shwAccountType = false;
    this.shwBtnFilter = false;
  }

  _filterChanged(obj) {
    this._fnHideAllFiltersDiv();

    if (obj == 1) {
      this.shwName = true;
      this.shwBtnFilter = true;
    } else if (obj == 2) {
      this.shwLastName = true;
      this.shwBtnFilter = true;
    } else if (obj == 3) {
      this.shwEmail = true;
      this.shwBtnFilter = true;
    } else if (obj == 4) {
      this.shwPhone = true;
      this.shwBtnFilter = true;
    } else if (obj == 5) {
      this.shwAccountType = true;
      this.shwBtnFilter = true;
    }
  }

  _addFilter(f: NgForm) {
    if ( f.value.frmFilter == 1) {
      if ( f.value.frmName.trim() == '') {
        // send error
      } else {
        const filter = {
          id: 1,
          filter: 'Nombre',
          value : f.value.frmName
        };
        this.filterList.push(filter);
        this._hideFilterOfChooseFilterArray(f.value.frmFilter);
        this._fnHideAllFiltersDiv();
      }
    } else if ( f.value.frmFilter == 2) {
      if ( f.value.frmLastName.trim() == '') {
        // send error
      } else {
        const filter = {
          id: 2,
          filter: 'Apellido',
          value : f.value.frmLastName
        };
        this.filterList.push(filter);
        this._hideFilterOfChooseFilterArray(f.value.frmFilter);
        this._fnHideAllFiltersDiv();
      }
    } else if ( f.value.frmFilter == 3) {
      if ( f.value.frmEmail.trim() == '') {
        // send error
      } else {
        const filter = {
          id: 3,
          filter: 'Correo',
          value : f.value.frmEmail
        };
        this.filterList.push(filter);
        this._hideFilterOfChooseFilterArray(f.value.frmFilter);
        this._fnHideAllFiltersDiv();
      }
// tslint:disable-next-line: align
    } else if ( f.value.frmFilter == 4) {
      if ( f.value.frmPhone.trim() == '') {
        // send error
        console.log('sin data');
      } else {
        const filter = {
          id: 4,
          filter: 'Teléfono',
          value : f.value.frmPhone
        };
        this.filterList.push(filter);
        this._hideFilterOfChooseFilterArray(f.value.frmFilter);
        this._fnHideAllFiltersDiv();
      }
    } else if ( f.value.frmFilter == 5) {
      if ( f.value.frmAccountType.trim() == '') {
        // send error
      } else {
        const filter = {
          id: 5,
          filter: 'Tipo de cuenta',
          value : f.value.frmAccountType
        };
        this.filterList.push(filter);
        this._hideFilterOfChooseFilterArray(f.value.frmFilter);
        this._fnHideAllFiltersDiv();
      }
    }
  }

  _hideFilterOfChooseFilterArray(value) {
    for ( let i = 0; i < this.chooseFilter.length; i++) {
      if (this.chooseFilter[i].value == value) {
        this.chooseFilter[i].show = false;
        break;
      }
    }
  }

  _removeFilterFromFilterList(value){
    for (let i = 0; i < this.filterList.length; i++) {
      if (this.filterList[i].id == value) {
        this.filterList.splice(i, 1);
        break;
      }
    }

    for (let i = 0; i < this.chooseFilter.length; i++) {
      if (this.chooseFilter[i].value == value) {
        this.chooseFilter[i].show = true;
        break;
      }
    }
  }

  _searchAllUsers() {
    this.UsersList = [];
    this.UsersList = this.ServUser._getUsers();
    this._addUsersToTable(this.UsersList);
  }

  _searchCustUsers() {
    this.UsersList = [];
    this.UsersList = this.ServUser._getUsers();
    let result = [];

    for (let i = 0; i < this.filterList.length; i++) {

      if ( i == 0 ) {
        result = this.UsersList;
      }
      result = this._userQuery(result, this.filterList[i].id, this.filterList[i].value);
      console.log(result);
    }

    this._addUsersToTable(result);
  }

  _userQuery(list, filter, value) {

    console.log(list +  filter + value);
    const result = [];
    if (list.length > 0 ){

      for (let i =0; i < list.length; i++){

        if (filter == 1){
          if (!list[i].name.toUpperCase().indexOf(value.toUpperCase())) {
            result.push(list[i]);
          }
        } else if (filter == 2){
          if (!list[i].lastname.toUpperCase().indexOf(value.toUpperCase())) {
            result.push(list[i]);
          }
        } else if (filter == 3){
          if (!list[i].email.toUpperCase().indexOf(value.toUpperCase()) ) {
            result.push(list[i]);
          }
        } else if (filter == 4){
          if (!list[i].phone.indexOf(value) ) {
            result.push(list[i]);
          }
        } else if (filter == 5){
          if (!list[i].userType.toUpperCase().indexOf(value.toUpperCase())) {
            result.push(list[i]);
          }
        }
      }

    }

    return result;

  }

}
