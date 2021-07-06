import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ForeignExchange } from "../models/foreign-exchange.model";
import { ForeignExchanges } from "../store";
import { ForeignExchangeService } from "./foreign-exchange.service";

@Injectable({
  providedIn: 'root'
})
export class ForeignExchangeResolver implements Resolve<ForeignExchange>{

  constructor(
    private readonly foreignExchangeService: ForeignExchangeService,
    private readonly store: Store
  ) { }

  //added resolver before going in the component so that if there are any errors getting the data, it will go to the error page.
  public resolve(): Observable<ForeignExchange> {
    return this.foreignExchangeService.getForeignExchange().pipe(
      map(foreignExchanges => {
        if (!foreignExchanges) {
          //TODO: ADD error page
        }
        this.store.dispatch(new ForeignExchanges(foreignExchanges));
        return foreignExchanges;
      }),
      catchError((errors: HttpErrorResponse) => {
        throw errors;
      })
    )
  }
}