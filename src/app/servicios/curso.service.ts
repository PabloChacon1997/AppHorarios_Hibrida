import { Injectable } from '@angular/core';
import { Materia } from './materia.service';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }
}

export interface Curso {
  id?: number;
  nombre?: string;
  capacidad?: number;
  ciclo?: number;
  paralelo?: string;
  activo?: boolean;
  materia?: Materia;
}
