import { ForeignExchange } from "../models/foreign-exchange.model";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { ForeignExchanges } from "./actions";

export interface ForeignExchangeModel {
  foreignExchanges: ForeignExchange
}

@State<ForeignExchangeModel>({
  name: 'ForeignExchangeState',
  defaults: {
    foreignExchanges: undefined
  }
})

// Using NGXS for state management. As the application grows, we wouldn't need to worry about where our muatations are coming from, we would have a single source of truth.
@Injectable()
export class ForeignExchangeState {

  @Selector() static ForeignExchangeData(state: ForeignExchangeModel) {
    return state.foreignExchanges
  }

  @Action(ForeignExchanges)
  public addForeignExchanges(context: StateContext<ForeignExchangeModel>, action: ForeignExchanges) {
    const state = context.getState();
    context.setState({
      ...state,
      foreignExchanges: action.foreignExchanges
    });
  }


}