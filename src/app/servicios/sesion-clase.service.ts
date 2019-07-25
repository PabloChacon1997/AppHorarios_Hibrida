import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Curso } from './curso.service';
import { Time } from '@angular/common';
import { Apollo } from 'apollo-angular';


const HORARIOS = gql`
query horarios($cedula: String!, $idPeriodo: Int!) {
  horario(cedula: $cedula, idPrdLectivo: $idPeriodo) {
    id
    dia
    horaInicio
    horaFin
    curso {
      id
      nombre
      materia {
        id
        nombre
      }
    }
  }
}
`;


@Injectable({
  providedIn: 'root'
})
export class SesionClaseService {

  constructor(private apollo: Apollo) { }

  getHorarios(cedula: String, idPeriodo: Number) {
    return this.apollo.query<HorarioRes>({
      query: HORARIOS,
      variables: {
        cedula: cedula,
        idPeriodo: idPeriodo
      }
    })
  }
}

export interface SesionClase {
  id?: number;
  curso?: Curso;
  dia?: number;
  horaInicio?: Time;
  horaFin?: Time;
}


interface HorarioRes {
  horario: SesionClase[];
}
