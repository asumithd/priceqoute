import { PriceListComponent } from './price-list/price-list.component';
import { PriceDetailsComponent } from './price-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'price',
        component: PriceDetailsComponent,
    },
    {
        path: 'priceList',
        component: PriceListComponent,
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})

export class PriceDetailsRouting { }