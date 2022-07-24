import { Masks } from "./../../utils/masks";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LoadControlService } from "src/app/services/load-control/load-control.service";
import { Genero } from "src/app/enums/genero.enum";

@Component({
  selector: "app-paciente-cadastro",
  templateUrl: "./paciente-cadastro.component.html",
  styleUrls: ["./paciente-cadastro.component.css"],
})
export class PacienteCadastroComponent implements OnInit {
  profileForm = new FormGroup({
    prontuario: new FormControl(""),
    nome: new FormControl(""),
    sobrenome: new FormControl(""),
    dataNascimento: new FormControl(""),
    genero: new FormControl(""),
    cpf: new FormControl(""),
    rg: new FormControl(""),
    ufRG: new FormControl(""),
    email: new FormControl("", [Validators.email]),
    celular: new FormControl(""),
    telefonefixo: new FormControl(""),
    convenio: new FormControl(""),
    carteirinhaconvenio: new FormControl(""),
    validadecarteirinha: new FormControl(""),
  });

  masks = new Masks();

  genero = Genero;

  generos: Array<string> = [];

  constructor(private loadControlService: LoadControlService) {}

  ngOnInit() {
    this.initGeneros();
  }

  private initGeneros() {
    var parse = Object.keys(this.genero);
    parse = parse.slice(parse.length / 2);
    this.generos = parse;
  }

  salvarPaciente() {
    this.loadControlService.show();
    setTimeout(() => {
      this.loadControlService.hide();
    }, 3000);
  }
}
