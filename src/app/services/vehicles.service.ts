import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  private idTypes: Array<any> = [
    { value: '1', label: 'Persona Física Nacional' },
    { value: '2', label: 'Persona Física Resident' },
    { value: '3', label: 'Gobierno Central' },
    { value: '4', label: 'Persona Jurídica' },
    { value: '5', label: 'Institución Autónoma' }
  ];

  private vehiclesBrands: Array<any> = [
    { value: '1', label: 'Acura' },
    { value: '2', label: 'Alfa Romeo' },
    { value: '3', label: 'AMC' },
    { value: '4', label: 'Aro' },
    { value: '5', label: 'Asia' },
    { value: '6', label: 'Aston Martin' },
    { value: '7', label: 'Audi' },
    { value: '8', label: 'Austin' },
    { value: '9', label: 'Baw' }
  ];

  private gasTypes: Array<any> = [
    { value: '1', label: 'Gasolina' },
    { value: '2', label: 'Diesel' }
  ];

  private transmissionTypes: Array<any> = [
    { value: '1', label: 'Manual' },
    { value: '2', label: 'Automático' },
    { value: '3', label: 'Shiftronic' }
  ];

  private legalTypes: Array<any> = [
    { value: '1', label: 'Si Posee' },
    { value: '2', label: 'No Posee' }
  ];

  constructor() { }

  _getLegalTypes() {
    return this.legalTypes;
  }
  _getIdTypes() {
    return this.idTypes;
  }

  _getVehiclesBrands() {
    return this.vehiclesBrands;
  }

  _getGasTypes() {
    return this.gasTypes;
  }

  _getTransmissionTypes() {
    return this.transmissionTypes;
  }
}
