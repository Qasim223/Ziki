import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem, MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { Menu } from 'primeng/menu';
import { GlobalService } from '../../services/global.service';
import { SelectButtonModule } from 'primeng/selectbutton';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  imports: [
    ButtonModule,
    DrawerModule,
    PanelMenuModule,
    MenubarModule,
    AvatarModule,
    Menu,
    SelectButtonModule,
  ],
  providers: [MessageService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true,
})
export class NavbarComponent {
  visible: boolean = false;
  sideMenuItems: MenuItem[] | undefined;
  profileMenuItems: MenuItem[] | undefined;
  loggedInUser: string = 'Kasim Sabir';
  menuTitle: string = '';

  darkModeLabel: string = 'Dark Mode';
  darkMode: boolean = false;
  darkModeIcon: string = 'pi pi-moon';

  constructor(
    private messageService: MessageService,
    private GlobalService: GlobalService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.darkMode = this.GlobalService.getDarkModeStatus();
    this.darkModeIcon = this.darkMode ? 'pi pi-sun' : 'pi pi-moon';
    this.darkModeLabel = this.darkMode ? 'Light Mode' : 'Dark Mode';
    this.menuTitle = this.titleService.getTitle().split('|')[1] || 'Dashboard';

    this.sideMenuItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/dashboard'],
        command: () => {
          this.visible = false;
          this.menuTitle = 'Dashboard';
        },
      },
      {
        label: 'Stock',
        icon: 'pi pi-warehouse',
        items: [
          {
            label: 'Stock Control',
            icon: 'pi pi-database',
            routerLink: ['/stock/control'],
            command: () => {
              this.visible = false;
              this.menuTitle = 'Stock Control';
            },
          },
        ],
      },
      {
        label: 'Sales',
        icon: 'pi pi-cart-minus',
        items: [
          {
            label: 'Sales Control',
            icon: 'pi pi-database',
            routerLink: ['/sales/control'],
            command: () => {
              this.visible = false;
              this.menuTitle = 'Sales Control';
            },
          },
        ],
      },
      {
        label: 'Purchase',
        icon: 'pi pi-cart-plus',
        items: [
          {
            label: 'Purchase Control',
            icon: 'pi pi-database',
            command: () => {
              this.messageService.add({
                severity: 'warn',
                summary: 'Search Results',
                detail: 'No results found',
                life: 3000,
              });
            },
          },
        ],
      },
    ];

    this.profileMenuItems = [
      {
        label: this.loggedInUser,
        items: [
          {
            label: 'My Profile',
            icon: 'pi pi-user',
          },
          {
            label: this.darkModeLabel,
            icon: this.darkModeIcon,
            command: () => this.toggleDarkMode(),
          },
          {
            label: 'Log Out',
            icon: 'pi pi-sign-out',
          },
        ],
      },
    ];
  }

  toggleDarkMode() {
    this.GlobalService.toggleDarkMode();
    this.darkMode = this.GlobalService.getDarkModeStatus();
    this.darkModeIcon = this.darkMode ? 'pi pi-sun' : 'pi pi-moon';
    this.darkModeLabel = this.darkMode ? 'Light Mode' : 'Dark Mode';
  }
}
