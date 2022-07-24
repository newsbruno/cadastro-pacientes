import { Component, OnInit } from "@angular/core";
import { MenuModel } from "src/app/models/menu.model";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit {
  menuList: Array<MenuModel> = [];

  constructor() {}

  ngOnInit() {
    this._generateMenus();
  }

  _generateMenus() {
    const arrayList = Array.from(new Array(1), (val, index) => {
      switch (index) {
        case 0:
          return {
            name: "Inicio",
            icon: "home",
            path: "",
          };
          break;
      }
    });
    this.menuList = [...arrayList];
  }
}
