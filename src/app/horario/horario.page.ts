import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SesionClase, SesionClaseService } from '../servicios/sesion-clase.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {


  public cedula: String;
  public idPeriodo: Number;

  public horarios: SesionClase[] = [];

  constructor(private route: ActivatedRoute, private horarioSrv: SesionClaseService) { }

  async ngOnInit() {

    this.cedula = this.route.snapshot.params.cedula
    this.idPeriodo = this.route.snapshot.params.idPeriodo


    this.horarios = await this.horarioSrv.getHorarios(this.cedula, this.idPeriodo)
      .toPromise()
      .then(data => data.data.horario);

    console.log(this.horarios)


  }

}
