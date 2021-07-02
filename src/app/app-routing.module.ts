import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForeignExchangeListComponent } from './components/foreign-exchange-list/foreign-exchange-list.component';

const routes: Routes = [
  {
    path: 'foreign-exchange', component: ForeignExchangeListComponent
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
