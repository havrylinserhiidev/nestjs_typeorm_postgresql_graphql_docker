import { Component } from "@angular/core";
import { IMenu } from "../interfaces";

@Component({
  selector: "app-nav",
  template: `
    <ul class="nav nav-pills mb-3">
      <li class="nav-item" *ngFor="let menu_item of menu">
        <a class="nav-link"
           routerLinkActive="active"
           [routerLink]="menu_item.href"
           [routerLinkActiveOptions]="{exact:true}"
        >
          <app-icon [icon]="menu_item.icon"></app-icon>
          {{menu_item.title}}</a>
      </li>
    </ul>`
})
export class NavComponent {
  menu?: IMenu[];

  constructor() {
    this.menu = [
      { id: 1, title: "Main", href: "/" },
      { id: 2, title: "Users", href: "/users", icon: "bi bi-people" }
    ];
  }
}
