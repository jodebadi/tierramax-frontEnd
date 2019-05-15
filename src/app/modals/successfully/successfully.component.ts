import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-successfully',
  templateUrl: './successfully.component.html',
  styleUrls: ['./successfully.component.scss']
})
export class SuccessfullyComponent implements OnInit {

  heading: string;
  content: any;

  constructor(public modalRef: MDBModalRef) {
  }

  ngOnInit() {
  }

}
