import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { LoadControlService } from "src/app/services/load-control/load-control.service";
import { takeUntil } from "rxjs/operators";
import { DrawerControllerService } from "src/app/services/drawer-controller/drawer-controller.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  isLoadingShow: boolean = true;
  private readonly destroy = new Subject();

  constructor(private loadControlService: LoadControlService) {}

  ngAfterViewInit(): void {
    this.initLoadingVisibility();
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
}
