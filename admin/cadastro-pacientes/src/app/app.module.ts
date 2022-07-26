import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MenuComponent } from "./menu/menu/menu.component";
import { PacienteCadastroComponent } from "./pages/paciente-cadastro/paciente-cadastro.component";
import { MatCardModule } from "@angular/material/card";
import {
  NgbModalModule,
  NgbModule,
  NgbPaginationModule,
} from "@ng-bootstrap/ng-bootstrap";
import {
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
} from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { TextMaskModule } from "angular2-text-mask";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { HttpClientModule } from "@angular/common/http";
import { PacientesComponent } from "./pages/pacientes/pacientes.component";
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home/home.component";
import { HeaderComponent } from "./header/header.component";
import { NgBrazil } from "ng-brazil";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PacienteCadastroComponent,
    PacientesComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    NgbModule,
    TextMaskModule,
    MatProgressBarModule,
    HttpClientModule,
    NgBrazil,
    MatSnackBarModule,
    MatTableModule,
    NgbPaginationModule,
    NgbModalModule,
    FormsModule,
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  exports: [HeaderComponent],
})
export class AppModule {}
