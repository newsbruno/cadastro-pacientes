import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatSidenav } from "@angular/material";
import { Title } from "@angular/platform-browser";
import { LoadControlService } from "./services/load-control/load-control.service";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title: string = "";

  @ViewChild("sidenav") sidenav: MatSidenav;
  isLoadingShow: boolean = true;

  private readonly destroy = new Subject();

  constructor(
    private titleService: Title,
    private loadControlService: LoadControlService
  ) {}

  ngAfterViewInit(): void {
    this.initLoadingVisibility();
  }

  ngOnInit(): void {
    this.title = this.titleService.getTitle();
  }

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
