import { Component, OnInit } from '@angular/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ChipsModule } from 'primeng/chips';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [OverlayPanelModule, InputGroupModule, InputGroupAddonModule, ButtonModule, InputTextModule, ChipsModule, CommonModule, PanelModule, AvatarModule, MenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit{
  items: { label?: string; icon?: string; separator?: boolean }[] = [];

  ngOnInit() {
      this.items = [
          {
              label: 'Refresh',
              icon: 'pi pi-refresh'
          },
          {
              label: 'Search',
              icon: 'pi pi-search'
          },
          {
              separator: true
          },
          {
              label: 'Delete',
              icon: 'pi pi-times'
          }
      ];
  }
}
