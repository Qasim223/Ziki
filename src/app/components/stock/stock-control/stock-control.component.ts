import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Stock } from '../../../classes/stock';
import { StockService } from '../../../services/stock.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-stock-control',
  imports: [
    TableModule,
    RatingModule,
    TagModule,
    ButtonModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './stock-control.component.html',
  styleUrl: './stock-control.component.css',
})
export class StockControlComponent {
  stocks!: Stock[];

  constructor(private StockService: StockService) {}

  ngOnInit() {
    this.StockService.getStockMini().then((data) => {
      this.stocks = data;
    });
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }
}
