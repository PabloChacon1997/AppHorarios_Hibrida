import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Carrera } from './carrera.service';


const PERIODOS_DOCENTE = gql`
query getPeriodos($cedula: String!) {
  periodosDocente(cedula: $cedula) {
    id
    nombre
    carrera {
      id
      nombre
    }
  }
}
`;


@Injectable({
  providedIn: 'root'
})
export class PeriodoLectivoService {

  constructor(private apollo: Apollo) { }

  getPeriodos(cedula: String) {
    return this.apollo.query<PeriodosRes>({
      query: PERIODOS_DOCENTE,
      variables: {
        cedula: cedula
      }
    });

  }

}
export interface PeriodoLectivo {
  id?: number;
  carrera?: Carrera;
  nombre?: string;
  fechaInicio?: Date;
  fechaFin?: Date;
  observacion?: string;
  estado?: boolean;
  activo?: boolean;
  numeroCierre?: number;
}

interface PeriodosRes {
  periodosDocente: PeriodoLectivo[]
}
