import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceDetailsComponent } from './price-details.component';
import { PriceDetailsRouting } from './price-details-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PriceListComponent } from './price-list/price-list.component';



@NgModule({
  imports: [
    CommonModule,
    PriceDetailsRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PriceDetailsComponent,
    PriceListComponent,

  ]
})
export class PriceDetailsModule { }
