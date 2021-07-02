import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ForeignExchangeService } from 'src/app/core/foreign-exchange.service';
import { ForeignExchange } from 'src/app/models/foreign-exchange.model';

@Component({
  selector: 'app-foreign-exchange-list',
  templateUrl: './foreign-exchange-list.component.html',
  styleUrls: ['./foreign-exchange-list.component.scss']
})
export class ForeignExchangeListComponent implements OnInit, AfterViewInit {

  foreignExchangeData: any;


  constructor(
    private readonly foreignExchangeService: ForeignExchangeService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
