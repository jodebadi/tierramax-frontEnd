import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { VehiclesService } from '../../../services/vehicles.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-add-vehicles',
  templateUrl: './add-vehicles.component.html',
  styleUrls: ['./add-vehicles.component.scss']
})
export class AddVehiclesComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  optionIdTypes: Array<any>;
  optionVehiclesBrands: Array<any>;
  optionGasTypes: Array<any>;
  optionTransmissionTypes: Array<any>;
  optionLegalTypes: Array<any>;


  constructor(private ServVehicles: VehiclesService) {}

  ngOnInit() {

    this.optionIdTypes = this.ServVehicles._getIdTypes();
    this.optionVehiclesBrands = this.ServVehicles._getVehiclesBrands();
    this.optionGasTypes = this.ServVehicles._getGasTypes();
    this.optionTransmissionTypes = this.ServVehicles._getTransmissionTypes();
    this.optionLegalTypes = this.ServVehicles._getLegalTypes();

    this.firstFormGroup = new FormGroup({

     frmAgent: new FormControl('Jose Manuel Badilla Porras'),
     frmPropietarioNombre: new FormControl(null),
     frmPropietarioTipoCedula : new FormControl(null),
     frmPropietarioCedula : new FormControl(null),
     frmPropertyproporcion : new FormControl(null)

    });

    this.secondFormGroup = new FormGroup({

      frmVehiculoPlaca : new FormControl(null),
      frmVehiculoMarca : new FormControl(null),
      frmVehiculoEstilo : new FormControl(null),
      frmVehiculoCarroceria : new FormControl(null),
      frmVehiculoCapacidad : new FormControl(null),
      frmVehiculoAnno : new FormControl(null),
      frmVehiculoColor : new FormControl(null),
      frmVehiculoCilindros : new FormControl(null),
      frmVehiculoCilindrada : new FormControl(null),
      frmVehiculoPeso : new FormControl(null),
      frmVehiculoPuertas : new FormControl(null)

    });

    this.thirdFormGroup = new FormGroup({

      frmVehiculoUso : new FormControl(null),
      frmVehiculoCombustible : new FormControl(null),
      frmVehiculoTraccion : new FormControl(null),
      frmVehiculoCajaDeCambios : new FormControl(null),
      frmVehiculoKilometraje : new FormControl(null),
      frmVehiculoNumeroChasis : new FormControl(null),
      frmVehiculoNumeroDeMotor : new FormControl(null),
      frmVehiculoMarcaDelMotor : new FormControl(null),

    });

    this.fourthFormGroup = new FormGroup({

      frmVehiculoGravamenesPrendarios : new FormControl(null),
      frmVehiculoGravamenesJudiciales : new FormControl(null),
      frmVehiculoAnotaciones : new FormControl(null),
      frmVehiculoInfracciones : new FormControl(null),
      frmVehiculoLevantamientos : new FormControl(null),

    });
  }

  // FIRST GROUP
  get frmAgent() { return this.firstFormGroup.get('frmAgent'); }
  get frmPropietarioNombre() { return this.firstFormGroup.get('frmPropietarioNombre'); }
  get frmPropietarioTipoCedula() { return this.firstFormGroup.get('frmPropietarioTipoCedula'); }
  get frmPropietarioCedula() { return this.firstFormGroup.get('frmPropietarioCedula'); }
  get frmPropertyproporcion() { return this.firstFormGroup.get('frmPropertyproporcion'); }

  // SECOND GROUP
  get frmVehiculoPlaca() { return this.secondFormGroup.get('frmVehiculoPlaca'); }
  get frmVehiculoMarca() { return this.secondFormGroup.get('frmVehiculoMarca'); }
  get frmVehiculoEstilo() { return this.secondFormGroup.get('frmVehiculoEstilo'); }
  get frmVehiculoCarroceria() { return this.secondFormGroup.get('frmVehiculoCarroceria'); }
  get frmVehiculoCapacidad() { return this.secondFormGroup.get('frmVehiculoCapacidad'); }
  get frmVehiculoAnno() { return this.secondFormGroup.get('frmVehiculoAnno'); }
  get frmVehiculoColor() { return this.secondFormGroup.get('frmVehiculoColor'); }
  get frmVehiculoCilindros() { return this.secondFormGroup.get('frmVehiculoCilindros'); }
  get frmVehiculoCilindrada() { return this.secondFormGroup.get('frmVehiculoCilindrada'); }
  get frmVehiculoPeso() { return this.secondFormGroup.get('frmVehiculoPeso'); }
  get frmVehiculoPuertas() { return this.secondFormGroup.get('frmVehiculoPuertas'); }

  // THIRD GROUP
  get frmVehiculoUso() { return this.thirdFormGroup.get('frmVehiculoUso'); }
  get frmVehiculoCombustible() { return this.thirdFormGroup.get('frmVehiculoCombustible'); }
  get frmVehiculoTraccion() { return this.thirdFormGroup.get('frmVehiculoTraccion'); }
  get frmVehiculoCajaDeCambios() { return this.thirdFormGroup.get('frmVehiculoCajaDeCambios'); }
  get frmVehiculoKilometraje() { return this.thirdFormGroup.get('frmVehiculoKilometraje'); }
  get frmVehiculoNumeroChasis() { return this.thirdFormGroup.get('frmVehiculoNumeroChasis'); }
  get frmVehiculoNumeroDeMotor() { return this.thirdFormGroup.get('frmVehiculoNumeroDeMotor'); }
  get frmVehiculoMarcaDelMotor() { return this.thirdFormGroup.get('frmVehiculoMarcaDelMotor'); }

  // FOURTH GROUP
  get frmVehiculoGravamenesPrendarios() { return this.fourthFormGroup.get('frmVehiculoGravamenesPrendarios'); }
  get frmVehiculoGravamenesJudiciales() { return this.fourthFormGroup.get('frmVehiculoGravamenesJudiciales'); }
  get frmVehiculoAnotaciones() { return this.fourthFormGroup.get('frmVehiculoAnotaciones'); }
  get frmVehiculoInfracciones() { return this.fourthFormGroup.get('frmVehiculoInfracciones'); }
  get frmVehiculoLevantamientos() { return this.fourthFormGroup.get('frmVehiculoLevantamientos'); }

  onSubmit(){
    alert('hOLA');
  }


}
