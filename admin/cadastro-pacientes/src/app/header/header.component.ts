import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { DrawerControllerService } from "../services/drawer-controller/drawer-controller.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  title: string = "";

  constructor(
    private titleService: Title,
    private drawerControllerService: DrawerControllerService
  ) {}

  ngOnInit(): void {
    this.title = this.titleService.getTitle();
  }

  initMenu = () => this.drawerControllerService.toggle();
}
