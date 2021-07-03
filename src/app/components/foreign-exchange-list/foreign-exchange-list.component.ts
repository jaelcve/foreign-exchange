import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ForeignExchangeService } from 'src/app/core/foreign-exchange.service';
import { ForeignExchange } from 'src/app/models/foreign-exchange.model';

@Component({
  selector: 'app-foreign-exchange-list',
  templateUrl: './foreign-exchange-list.component.html',
  styleUrls: ['./foreign-exchange-list.component.scss']
})
export class ForeignExchangeListComponent implements OnInit {

  foreignExchangeData$: Observable<ForeignExchange>;
  gridHeight: string;
  largeScreen = 992;


  constructor(
    private readonly foreignExchangeService: ForeignExchangeService
  ) { }

  ngOnInit(): void {
    this.foreignExchangeData$ = this.foreignExchangeService.getForeignExchange();
    this.gridHeight = (window.innerWidth <= this.largeScreen) ? '2:2' : '2:1';
  }

  onResize(event: any) {
    this.gridHeight = (event.target.innerWidth <= this.largeScreen) ? '2:2' : '2:1';
  }

}
