import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeriodoLectivoService, PeriodoLectivo } from '../servicios/periodo-lectivo.service';

@Component({
  selector: 'app-periodos',
  templateUrl: './periodos.page.html',
  styleUrls: ['./periodos.page.scss'],
})
export class PeriodosPage implements OnInit {


  public cedula: String;

  public periodos: PeriodoLectivo[];


  constructor(
    private route: ActivatedRoute,
    private periodoSrv: PeriodoLectivoService,
    private router: Router
  ) {

    this.cedula = this.route.snapshot.params.cedula;
  }

  async ngOnInit() {

    this.periodos = await this.periodoSrv.getPeriodos(this.cedula)
      .toPromise()
      .then(data => data.data.periodosDocente)

  }


  verHorario(periodo: PeriodoLectivo) {
    this.router.navigate(['horario', this.cedula, periodo.id])
  }


}
