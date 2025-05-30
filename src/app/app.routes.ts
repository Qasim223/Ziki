import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StockControlComponent } from './components/stock/stock-control/stock-control.component';

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
];
