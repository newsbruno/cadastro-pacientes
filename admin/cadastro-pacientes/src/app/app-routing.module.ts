import { HomeComponent } from "./pages/home/home/home.component";
import { PacientesComponent } from "./pages/pacientes/pacientes.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home",
  },
  {
    path: "home",
    pathMatch: "full",
    component: HomeComponent,
  },
  {
    path: "pacientes",
    component: PacientesComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
