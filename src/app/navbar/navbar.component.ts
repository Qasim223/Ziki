import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem, MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-navbar',
  imports: [
    ButtonModule,
    DrawerModule,
    PanelMenuModule,
    MenubarModule,
    AvatarModule,
    Menu,
  ],
  providers: [MessageService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  visible: boolean = false;
  items: MenuItem[] | undefined;
  items2: MenuItem[] | undefined;
  loggedInUser: string = 'Kasim Sabir';
  menuTitle: string = 'Dashboard';

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Stock',
        icon: 'pi pi-warehouse',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            command: () => {
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'File created',
                life: 3000,
              });
            },
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
            command: () => {
              this.messageService.add({
                severity: 'warn',
                summary: 'Search Results',
                detail: 'No results found',
                life: 3000,
              });
            },
          },
          {
            label: 'Print',
            icon: 'pi pi-print',
            command: () => {
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'No printer connected',
                life: 3000,
              });
            },
          },
        ],
      },
      {
        label: 'Sales',
        icon: 'pi pi-cart-minus',
        items: [
          {
            label: 'Import',
            icon: 'pi pi-cloud-download',
            command: () => {
              this.messageService.add({
                severity: 'info',
                summary: 'Downloads',
                detail: 'Downloaded from cloud',
                life: 3000,
              });
            },
          },
          {
            label: 'Export',
            icon: 'pi pi-cloud-upload',
            command: () => {
              this.messageService.add({
                severity: 'info',
                summary: 'Shared',
                detail: 'Exported to cloud',
                life: 3000,
              });
            },
          },
        ],
      },
      {
        label: 'Purchase',
        icon: 'pi pi-cart-plus',
        items: [
          {
            label: 'Import',
            icon: 'pi pi-cloud-download',
            command: () => {
              this.messageService.add({
                severity: 'info',
                summary: 'Downloads',
                detail: 'Downloaded from cloud',
                life: 3000,
              });
            },
          },
          {
            label: 'Export',
            icon: 'pi pi-cloud-upload',
            command: () => {
              this.messageService.add({
                severity: 'info',
                summary: 'Shared',
                detail: 'Exported to cloud',
                life: 3000,
              });
            },
          },
        ],
      },
      {
        label: 'Sign Out',
        icon: 'pi pi-sign-out',
        command: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'Signed out',
            detail: 'User logged out',
            life: 3000,
          });
        },
      },
    ];

    this.items2 = [
      {
        label: this.loggedInUser,
        items: [
          {
            label: 'My Profile',
            icon: 'pi pi-user',
          },
          {
            label: 'Log Out',
            icon: 'pi pi-sign-out',
          },
        ],
      },
    ];
  }
}
