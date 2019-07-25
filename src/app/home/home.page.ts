import { Component } from '@angular/core';
import { UsuarioService, Usuario } from '../servicios/usuario.service';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  usuarioIn: String = 'ROOT';
  contraseniaIn: String = 'WARMANDOCUTULO';

  private usuario: Usuario;

  constructor(private usuarioSrv: UsuarioService, private router: Router) {

  }


  async enviarFormulario() {
    this.usuario = await this.usuarioSrv.ingresar(this.usuarioIn, this.contraseniaIn)
      .toPromise()
      .then(data => data.data.usuario)

    this.router.navigate(['periodos', this.usuario.persona.identificacion])

  }

}
