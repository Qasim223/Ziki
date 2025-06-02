import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StockControlComponent } from './components/stock/stock-control/stock-control.component';
import { SalesControlComponent } from './components/sales/sales-control/sales-control.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    title: 'Ziki | Dashboard',
    component: DashboardComponent,
  },
  {
    path: 'stock/control',
    title: 'Ziki | Stock Control',
    component: StockControlComponent,
  },
  {
    path: 'sales/control',
    title: 'Ziki | Sales Control',
    component: SalesControlComponent,
  },
];
