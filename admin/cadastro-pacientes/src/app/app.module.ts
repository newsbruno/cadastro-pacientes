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
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
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

@NgModule({
  declarations: [AppComponent, MenuComponent, PacienteCadastroComponent],
  imports: [
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
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
