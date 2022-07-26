import { Paciente } from "./../../models/paciente.model";
import { Masks } from "./../../utils/masks";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LoadControlService } from "src/app/services/load-control/load-control.service";
import { Genero } from "src/app/enums/genero.enum";
import { ApiService } from "src/app/services/api/api.service";
import { NgBrazilValidators } from "ng-brazil";
import { MatSnackBar } from "@angular/material";
import { ApiResponseModel } from "src/app/models/api-response.model";

@Component({
  selector: "app-paciente-cadastro",
  templateUrl: "./paciente-cadastro.component.html",
  styleUrls: ["./paciente-cadastro.component.css"],
})
export class PacienteCadastroComponent implements OnInit {
  profileForm = new FormGroup({
    prontuario: new FormControl("", [Validators.nullValidator]),
    nome: new FormControl("", [Validators.required]),
    sobrenome: new FormControl("", [Validators.required]),
    dataNascimento: new FormControl("", [Validators.required]),
    genero: new FormControl("", [Validators.required]),
    cpf: new FormControl("", [
      NgBrazilValidators.cpf,
      Validators.nullValidator,
    ]),
    rg: new FormControl("", [Validators.nullValidator]),
    ufRG: new FormControl("", [Validators.nullValidator]),
    email: new FormControl("", [Validators.email, Validators.required]),
    celular: new FormControl("", [
      NgBrazilValidators.celular,
      Validators.required,
    ]),
    telefonefixo: new FormControl("", [
      NgBrazilValidators.telefone,
      Validators.nullValidator,
    ]),
    convenio: new FormControl("", [Validators.nullValidator]),
    carteirinhaconvenio: new FormControl("", [Validators.nullValidator]),
    validadecarteirinha: new FormControl("", [Validators.nullValidator]),
  });

  masks = new Masks();

  genero = Genero;

  generos: Array<string> = [];

  constructor(
    private loadControlService: LoadControlService,
    private apiService: ApiService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.initGeneros();
  }

  //Parse dos generos
  private initGeneros() {
    var parse = Object.keys(this.genero);
    parse = parse.slice(parse.length / 2);
    this.generos = parse;
  }

  //Salvar Paciente
  salvarPaciente() {
    if (this.profileForm.valid) {
      this.loadControlService.show();

      const paciente: Paciente = this.profileForm.value;

      this.apiService
        .insertPaciente(paciente)
        .toPromise()
        .then((result: ApiResponseModel) => {
          this.loadControlService.hide();
          this.openSnackBar(result.message);
        })
        .catch(() => {
          this.loadControlService.hide();
          this.openSnackBar("Não foi possível salvar o paciente.");
        });
    } else {
      return;
    }
  }

  //Retornar erros do form
  getErrors(formValue: string) {
    return this.profileForm.get(formValue).errors;
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }
}
