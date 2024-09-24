import { Component } from '@angular/core';
import { SideBarComponent } from "../../side-bar/side-bar.component";
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../header/header.component";

@Component({
  selector: 'app-main-layout-component',
  standalone: true,
  imports: [SideBarComponent, RouterOutlet, HeaderComponent],
  templateUrl: './main-layout-component.component.html',
  styleUrl: './main-layout-component.component.scss',
})
export class MainLayoutComponent {}
