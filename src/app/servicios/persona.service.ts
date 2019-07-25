import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }
}

export interface Persona {
  id?: number;
  Foto?: string;
  identificacion?: string;
  primerApellido?: string;
  segundoApellido?: string;
  primerNombre?: string;
  segundoNombre?: string;
  genero?: string;
  sexo?: string;
  telefono?: string;
  celular?: string;
  correo?: string;

}