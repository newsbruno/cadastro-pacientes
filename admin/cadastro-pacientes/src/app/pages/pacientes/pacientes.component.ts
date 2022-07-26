import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { ApiService } from "src/app/services/api/api.service";
import { takeUntil } from "rxjs/operators";
import { Paciente } from "src/app/models/paciente.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Masks } from "src/app/utils/masks";
import { LoadControlService } from "src/app/services/load-control/load-control.service";
import { MatSnackBar } from "@angular/material";
import { ApiResponseModel } from "src/app/models/api-response.model";
import * as moment from "moment";
import { Genero } from "src/app/enums/genero.enum";

@Component({
  selector: "app-pacientes",
  templateUrl: "./pacientes.component.html",
  styleUrls: ["./pacientes.component.css"],
})
export class PacientesComponent implements OnInit, OnDestroy {
  private readonly destroy = new Subject();

  pacientes: Array<Paciente> = [];
  page: number = 1;
  pageSize: number = 10;
  currentPaciente: Paciente = <any>{};
  masks = new Masks();
  genero = Genero;

  constructor(
    private apiService: ApiService,
    private modalService: NgbModal,
    private loadControlService: LoadControlService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  ngOnInit() {
    this.initPacientes();
  }

  //Carregar todos os pacientes
  initPacientes() {
    this.apiService
      .getAllPacientes()
      .pipe(takeUntil(this.destroy))
      .subscribe((result) => {
        const apiResponseModel: ApiResponseModel = result as any;
        if (apiResponseModel) {
          this.pacientes = apiResponseModel.data as Array<Paciente>;
        }
      });
  }

  //Mostrar Modal
  openModalDetalhes(content, paciente: Paciente) {
    if (paciente) {
      this.currentPaciente = paciente;
    }
    this.modalService.open(content).result.then(
      (result) => {
        if (result === "Save") {
          this.atualizarPaciente();
        }
      },
      (reason) => {}
    );
  }

  //Atualizar Paciente
  atualizarPaciente() {
    if (this.currentPaciente) {
      this.loadControlService.show();

      const paciente: Paciente = this.currentPaciente;

      this.apiService
        .updatePaciente(paciente)
        .toPromise()
        .then((result: ApiResponseModel) => {
          this.loadControlService.hide();
          this.openSnackBar(result.message);
        })
        .catch(() => {
          this.loadControlService.hide();
          this.openSnackBar("Não foi possível atualizar o paciente.");
        });
    } else {
      return;
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }

  formatDate(date: string) {
    return moment(date).format("DD/MM/YYYY");
  }
}
