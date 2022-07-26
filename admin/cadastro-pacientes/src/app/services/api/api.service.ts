import { Paciente } from "./../../models/paciente.model";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { apiUrl } from "src/app/environment/environment";
import { ApiResponseModel } from "src/app/models/api-response.model";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    accept: "*/*",
  }),
};

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // Retorna todos pacientes
  getAllPacientes(): Observable<ApiResponseModel[]> {
    return this.http
      .get<ApiResponseModel[]>(`${apiUrl}/pacientes`, httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Insere novo paciente
  insertPaciente(paciente: Paciente): Observable<ApiResponseModel> {
    return this.http
      .post<ApiResponseModel>(`${apiUrl}/pacientes/add`, paciente, httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Atualiza paciente existente
  updatePaciente(paciente: Paciente): Observable<ApiResponseModel> {
    return this.http
      .put<ApiResponseModel>(
        `${apiUrl}/pacientes/update`,
        paciente,
        httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(err);
  }
}
