import { Genero } from "./../enums/genero.enum";
export interface Paciente {
  prontuario: string;
  nome: string;
  sobrenome: string;
  dataNascimento: string;
  genero: Genero;
  cpf: string;
  rg: string;
  ufRG: string;
  email: string;
  celular: string;
  telefonefixo: string;
  convenio: string;
  carteirinhaconvenio: string;
  validadecarteirinha: string;
}
