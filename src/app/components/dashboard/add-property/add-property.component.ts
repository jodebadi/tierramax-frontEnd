import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PropertyService } from '../../../services/property.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  optionPropertyType: Array<any>;
  optionPropertyCategory: Array<any>;
  optionPropertyStatus: Array<any>;
  optionMatriculaProvince: Array<any>;
  opcionListTypes: Array<any>;

  opcionPais: Array<any>;
  opcionCanton: Array<any>;
  opcionDistrito: Array<any>;
  opcionCurrency: Array<any>;
  opcionYesAndNoAwnswer: Array<any>;

  constructor(private ServProperty: PropertyService) {}

  ngOnInit() {
    this.optionPropertyType = this.ServProperty._getPropertytypes();
    this.optionPropertyCategory = this.ServProperty._getPropertyCategory();
    this.optionPropertyStatus = this.ServProperty._getPropertyStatus();
    this.optionMatriculaProvince = this.ServProperty._getProvincias();
    this.opcionListTypes = this.ServProperty._getListTypes();
    this.opcionListTypes = this.ServProperty._getListTypes();
    this.opcionPais = this.ServProperty._getCountries();
    this.opcionCanton = this.ServProperty._getCanton();
    this.opcionDistrito = this.ServProperty._getDistrito();
    this.opcionCurrency = this.ServProperty._getCurrency();
    this.opcionYesAndNoAwnswer = this.ServProperty._getYesyAndNoanwswer();

    this.firstFormGroup = new FormGroup({

      /*
      frmAgent: new FormControl('Jose Manuel Badilla Porras', [Validators.required]),
      frmPropertyType : new FormControl(null, [Validators.required]),
      frmPropertyCategory : new FormControl(null, [Validators.required]),
      frmPropertyStatus : new FormControl(null, [Validators.required]),

      frmMatriculaProvince : new FormControl(null, [Validators.required]),
      frmMatriculaFinca : new FormControl(null, [Validators.required]),
      frmMatriculaDuplicado : new FormControl(null, [Validators.required]),
      frmMatriculaHorizontal : new FormControl(null, [Validators.required]),
      frmMatriculaDerecho : new FormControl(null, [Validators.required]),

      frmPlanoProvincia : new FormControl(null, [Validators.required]),
      frmPlanoNumero : new FormControl(null, [Validators.required]),
      frmPlanoAnno : new FormControl(null, [Validators.required]),

      frmLoteOUnidad : new FormControl(null, [Validators.required]),
      frmTipoListado : new FormControl(null, [Validators.required]),
      frmTipoListadoExp : new FormControl(null, [Validators.required]),

      frmPais : new FormControl(null, [Validators.required]),
      frmProvincia : new FormControl(null, [Validators.required]),
      frmCanton : new FormControl(null, [Validators.required]),
      frmDistrito : new FormControl(null, [Validators.required]),

      */

     frmAgent: new FormControl('Jose Manuel Badilla Porras'),
     frmPropertyType : new FormControl(null),
     frmPropertyCategory : new FormControl(null),
     frmPropertyStatus : new FormControl(null),

     frmMatriculaProvince : new FormControl(null),
     frmMatriculaFinca : new FormControl(null),
     frmMatriculaDuplicado : new FormControl(null),
     frmMatriculaHorizontal : new FormControl(null),
     frmMatriculaDerecho : new FormControl(null),

     frmPlanoProvincia : new FormControl(null),
     frmPlanoNumero : new FormControl(null),
     frmPlanoAnno : new FormControl(null),

     frmLoteOUnidad : new FormControl(null),
     frmTipoListado : new FormControl(null),
     frmTipoListadoExp : new FormControl(null),

     frmPais : new FormControl(null),
     frmProvincia : new FormControl(null),
     frmCanton : new FormControl(null),
     frmDistrito : new FormControl(null)

    });

    this.secondFormGroup = new FormGroup({
      frmVenta: new FormControl(),
      frmVentaMoneda: new FormControl(),
      frmVentaPrecio: new FormControl(),
      frmVentaComisionCompleta: new FormControl(),
      frmVentaComisionComprador: new FormControl(),

      frmRenta: new FormControl(),
      frmRentaMoneda: new FormControl(),
      frmRentaFeeMensual: new FormControl(),
      frmRentaDeposito: new FormControl(),
    });
  }

  // FIRST GROUP
  get frmAgent() { return this.firstFormGroup.get('frmAgent'); }
  get frmPropertyType() { return this.firstFormGroup.get('frmPropertyType'); }
  get frmPropertyCategory() { return this.firstFormGroup.get('frmPropertyCategory'); }
  get frmPropertyStatus() { return this.firstFormGroup.get('frmPropertyStatus'); }

  get frmMatriculaProvince() { return this.firstFormGroup.get('frmMatriculaProvince'); }
  get frmMatriculaFinca() { return this.firstFormGroup.get('frmMatriculaFinca'); }
  get frmMatriculaDuplicado() { return this.firstFormGroup.get('frmMatriculaDuplicado'); }
  get frmMatriculaHorizontal() { return this.firstFormGroup.get('frmMatriculaHorizontal'); }
  get frmMatriculaDerecho() { return this.firstFormGroup.get('frmMatriculaDerecho'); }

  get frmPlanoProvincia() { return this.firstFormGroup.get('frmPlanoProvincia'); }
  get frmPlanoNumero() { return this.firstFormGroup.get('frmPlanoNumero'); }
  get frmPlanoAnno() { return this.firstFormGroup.get('frmPlanoAnno'); }

  get frmLoteOUnidad() { return this.firstFormGroup.get('frmLoteOUnidad'); }
  get frmTipoListado() { return this.firstFormGroup.get('frmTipoListado'); }
  get frmTipoListadoExp() { return this.firstFormGroup.get('frmTipoListadoExp'); }
  get frmPais() { return this.firstFormGroup.get('frmPais'); }
  get frmProvincia() { return this.firstFormGroup.get('frmProvincia'); }
  get frmCanton() { return this.firstFormGroup.get('frmCanton'); }
  get frmDistrito() { return this.firstFormGroup.get('frmDistrito'); }

  // SECOND GROUP
  get frmVenta() { return this.secondFormGroup.get('frmVenta'); }
  get frmVentaMoneda() { return this.secondFormGroup.get('frmVentaMoneda'); }
  get frmVentaPrecio() { return this.secondFormGroup.get('frmVentaPrecio'); }
  get frmVentaComisionCompleta() { return this.secondFormGroup.get('frmVentaComisionCompleta'); }
  get frmVentaComisionComprador() { return this.secondFormGroup.get('frmVentaComisionComprador'); }

  get frmRenta() { return this.secondFormGroup.get('frmRenta'); }
  get frmRentaMoneda() { return this.secondFormGroup.get('frmRentaMoneda'); }
  get frmRentaFeeMensual() { return this.secondFormGroup.get('frmRentaFeeMensual'); }
  get frmRentaDeposito() { return this.secondFormGroup.get('frmRentaDeposito'); }


}
