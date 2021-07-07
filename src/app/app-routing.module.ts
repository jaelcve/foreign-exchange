import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { ForeignExchangeListComponent } from './components/foreign-exchange-list/foreign-exchange-list.component';
import { ForeignExchangeResolver } from './core/foreign-exchange.resolver';

const routes: Routes = [
  {
    path: 'foreign-exchange', component: ForeignExchangeListComponent, resolve: { resolvveforeignExchange: ForeignExchangeResolver }
  },
  {
    path: 'error', component: ErrorComponent
  },
  {
    path: '**', redirectTo: 'foreign-exchange'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
