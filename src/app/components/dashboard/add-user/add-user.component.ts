import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { SuccessfullyComponent } from '../../../modals/successfully/successfully.component';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) { }

  

  ngOnInit() {
  }

  onSubmit(f: NgForm) {

    const modalOptions = {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: 'modal-dialog-centered modal-notify modal-success',
      containerClass: '',
      animated: true,
      data: {
          heading: 'Agregar Usuario',
          content: { heading: 'Usuario agregado', description: 'El usuario se ha agregado satisfactoriamente a la base de datos.'}
      }
    };

    this.modalRef = this.modalService.show(SuccessfullyComponent, modalOptions );

  }
}
