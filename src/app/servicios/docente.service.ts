import { Injectable } from '@angular/core';
import { Persona } from './persona.service';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor() { }
}
export interface Docente {
  id?: number;
  persona?: Persona;
  codigo?: string;
  otroTrabajo?: boolean;
  categoria?: number;
  fechaContrato?: Date;
  fechaFin?: Date;
  tipoTiempo?: string;
  activo?: boolean;
  observacion?: string;
  capacitador?: boolean;
  titulo?: string;
  abreviatura?: string;
  enFuncion?: boolean;
}