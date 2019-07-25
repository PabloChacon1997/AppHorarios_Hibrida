import { Injectable } from '@angular/core';
import { Persona } from './persona.service';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const INGRESAR = gql`
query ingresar($usuario: String!, $password: String!) {
  usuario(username: $usuario, password: $password) {
    username
    persona {
      id
      identificacion
      primerNombre
      segundoNombre
      primerApellido
      segundoApellido
    }
  }
}
`;



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private apollo: Apollo) { }

  public ingresar(usuario: String, password: String) {
    return this.apollo.query<UsuarioRes>({
      query: INGRESAR,
      variables: {
        usuario: usuario,
        password: password
      }
    })

  }

}

export interface Usuario {
  username?: string;
  password?: string;
  estado?: boolean;
  persona?: Persona;

}


interface UsuarioRes {
  usuario: Usuario
}

interface UsuariosRes {
  usuarios: Usuario[]
}
