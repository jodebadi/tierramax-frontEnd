import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private propertyTypes: Array<any> = [
    { value: '1', label: 'Residencial' },
    { value: '2', label: 'Multi-Familiar' },
    { value: '3', label: 'Terreno Rural' },
    { value: '4', label: 'Lote Residencial' },
    { value: '5', label: 'Hoteles' },
    { value: '6', label: 'Fincas y Ranchos' },
    { value: '7', label: 'Comercial' }
  ];

  private propertyCategory: Array<any> = [
    { type : '1',  value: '1', label: 'Apartamento' },
    { type : '1',  value: '2', label: 'Condominio' },
    { type : '1',  value: '3', label: 'Casa Unifamiliar' },
    { type : '1',  value: '4', label: 'Vivienda en serie' },
    { type : '2',  value: '1', label: 'Doble' },
    { type : '2',  value: '1', label: 'Tripe' },
    { type : '2',  value: '1', label: 'Cuadruple' },
    { type : '3',  value: '1', label: 'Rural' },
    { type : '3',  value: '1', label: 'Con mejoras' },
    { type : '4',  value: '1', label: 'Residencial' },
    { type : '5',  value: '1', label: 'Bed & Breakfast' },
    { type : '5',  value: '1', label: 'Hostel' },
    { type : '5',  value: '1', label: 'Hotel' },
    { type : '5',  value: '1', label: 'Lodge' },
    { type : '5',  value: '1', label: 'Motel' },
    { type : '5',  value: '1', label: 'Resort' },
    { type : '6',  value: '1', label: 'Unifamiliar' },
    { type : '6',  value: '1', label: 'Multi-Familiar' },
    { type : '7',  value: '1', label: 'Agrícola' },
    { type : '7',  value: '1', label: 'Edificio' },
    { type : '7',  value: '1', label: 'Produce ingresos' },
    { type : '7',  value: '1', label: 'Industrial' },
    { type : '7',  value: '1', label: 'Terreno' },
    { type : '7',  value: '1', label: 'Espacio de oficinas' },
    { type : '7',  value: '1', label: 'Estacionamiento' },
    { type : '7',  value: '1', label: 'Restaurantes' },
    { type : '7',  value: '1', label: 'Ventas al por menor' },
    { type : '7',  value: '1', label: 'Depósito' }
  ];

  private propertyStatus: Array<any> = [
    { value: '1', label: 'Finalizado' },
    { value: '2', label: 'Espera' },
    { value: '3', label: 'Construcción' },
    { value: '4', label: 'Pre-Venta' }
  ];

  private provinces: Array<any> = [
    { value: '0', label: 'San Jose' },
    { value: '1', label: 'Alajuela' },
    { value: '2', label: 'Cartago' },
    { value: '3', label: 'Heredia' },
    { value: '4', label: 'Guanacaste' },
    { value: '5', label: 'Puntarenas' },
    { value: '6', label: 'Limón' },
  ];

  private listTypes: Array<any> = [
    { value: '0', label: 'Abierto' },
    { value: '1', label: 'Exclusivo' }
  ];

  private country: Array<any> = [
    { value: '0', label: 'Costa Rica' },
    { value: '1', label: 'Panamá' }
  ];

  private canton: Array<any> = [
    { value: '0', label: 'Santa Ana' },
    { value: '1', label: 'Escazu' }
  ];

  private distrito: Array<any> = [
    { value: '0', label: 'Salitral' },
    { value: '1', label: 'Bebedero' }
  ];

  private currency: Array<any> = [
    { value: '0', label: '$ (USD)' },
    { value: '1', label: '‎₡ (CRC)' }
  ];

  private yesyAndNoanwswer: Array<any> = [
    { value: '0', label: 'Sí' },
    { value: '1', label: '‎No' }
  ];



  constructor(private http: HttpClient) { }

  _getYesyAndNoanwswer() {
    return this.yesyAndNoanwswer;
  }
  _getCurrency() {
    return this.currency;
  }

  _getPropertytypes() {
    return this.propertyTypes;
  }

  _getPropertyCategory() {
    return this.propertyCategory;
  }

  _getPropertyStatus() {
    return this.propertyStatus;
  }

  _getListTypes() {
    return this.listTypes;
  }

  _getProvincias() {
    return this.provinces;
  }

  _getCanton() {
    return this.canton;
  }

  _getDistrito() {
    return this.distrito;
  }

  _getCountries() {
    return this.country;
  }

}
