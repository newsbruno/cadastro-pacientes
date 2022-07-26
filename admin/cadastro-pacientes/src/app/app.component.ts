import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatSidenav } from "@angular/material";
import { Subject } from "rxjs";
import { LoadControlService } from "./services/load-control/load-control.service";
import { takeUntil } from "rxjs/operators";
import { DrawerControllerService } from "./services/drawer-controller/drawer-controller.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  isLoadingShow: boolean = true;
  private readonly destroy = new Subject();
  @ViewChild("sidenav") sidenav: MatSidenav;

  constructor(
    private loadControlService: LoadControlService,
    private drawerControllerService: DrawerControllerService
  ) {}

  ngAfterViewInit(): void {
    this.initLoadingVisibility();
    this.initDrawerController();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  initLoadingVisibility() {
    this.loadControlService.loadVisibleisHidden
      .pipe(takeUntil(this.destroy))
      .subscribe((value) => (this.isLoadingShow = value));
  }

  initDrawerController() {
    this.drawerControllerService.setDrawer(this.sidenav);
  }
}
