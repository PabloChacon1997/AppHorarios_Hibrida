import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor() { }
}
export interface Materia {
  id?: number;
  nombre?: string;
}