import { Injectable } from "@angular/core";
import { MatSidenav } from "@angular/material";

@Injectable({
  providedIn: "root",
})
export class DrawerControllerService {
  private drawer: MatSidenav;

  constructor() {}

  setDrawer(drawer: MatSidenav) {
    this.drawer = drawer;
  }

  toggle(): void {
    this.drawer.opened ? this.drawer.close() : this.drawer.open();
  }
}
