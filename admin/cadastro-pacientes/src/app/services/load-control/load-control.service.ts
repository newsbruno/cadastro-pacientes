import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoadControlService {
  public loadVisibleisHidden = new BehaviorSubject(true);

  constructor() {}

  public show() {
    this.loadVisibleisHidden.next(false);
  }

  public hide() {
    this.loadVisibleisHidden.next(true);
  }
}
