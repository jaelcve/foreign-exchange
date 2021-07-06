import { ForeignExchange } from "../models/foreign-exchange.model";

export class ForeignExchanges {
  static readonly type = '[Rates] ForeignExchanges';
  constructor(public foreignExchanges: ForeignExchange) { }
}

export class Error {
  static readonly type = '[Navigate] Error';
}