import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoanPricesComponent } from './loan-prices/loan-prices.component';

const routes: Routes = [
  { path: '', redirectTo: '/loan-prices', pathMatch: 'full' },
  { path: 'loan-prices', component: LoanPricesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
