import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EMPTY } from "rxjs";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Cacheable } from "ts-cacheable";
import { ForeignExchange } from "../models/foreign-exchange.model";



@Injectable({
  providedIn: 'root'
})
export class ForeignExchangeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  @Cacheable()
  public getForeignExchange(): Observable<ForeignExchange> {
    const httpOptions = this.getHttpOptions();
    return this.httpClient.get<ForeignExchange>(environment.foreignExchange, httpOptions)
      .pipe(
        map(foreignExchanges => {
          return foreignExchanges as unknown as ForeignExchange;
        }),
        catchError(err => {
          console.error(err)
          return EMPTY
        })
      )
  }


  private getHttpOptions(): any {
    return {
      observe: 'body',
      responseType: 'json'
    }
  }
}