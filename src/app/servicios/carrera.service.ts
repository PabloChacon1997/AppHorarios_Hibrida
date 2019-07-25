import { Injectable } from '@angular/core';
import { Docente } from './docente.service';
import { Apollo } from 'apollo-angular';



@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor(private apollo: Apollo) { }

}

export interface Carrera {
  id?: number;
  docenteCoordinador?: Docente;
  nombre?: string;
  codigo?: string;
  fechaInicio?: Date;
  fechaFin?: Date;
  modalidad?: string;
  activo?: boolean;
  semanas?: number;
}