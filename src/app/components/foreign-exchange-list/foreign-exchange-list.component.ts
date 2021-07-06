import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ForeignExchange } from 'src/app/models/foreign-exchange.model';
import { ForeignExchangeState } from 'src/app/store';

@Component({
  selector: 'app-foreign-exchange-list',
  templateUrl: './foreign-exchange-list.component.html',
  styleUrls: ['./foreign-exchange-list.component.scss']
})
export class ForeignExchangeListComponent implements OnInit {

  @Select(ForeignExchangeState.ForeignExchangeData) foreignExchangeData$: Observable<ForeignExchange>;
  gridHeight: string;
  largeScreen = 992;

  constructor(
  ) { }

  ngOnInit(): void {
    this.gridHeight = (window.innerWidth <= this.largeScreen) ? '2:2' : '2:1';
  }

  onResize(event: any) {
    this.gridHeight = (event.target.innerWidth <= this.largeScreen) ? '2:2' : '2:1';
  }

}
