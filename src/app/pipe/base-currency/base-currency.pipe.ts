import { Pipe, PipeTransform } from "@angular/core";
import { Store } from "@ngxs/store";

@Pipe({name: 'baseCurrency'})
export class BaseCurrencyPipe implements PipeTransform {
  
  base: string;

  constructor(
    private readonly store: Store
  ) {
    this.base = this.store.selectSnapshot<string>((state) => state.ForeignExchangeState.foreignExchanges.base)
  }
  
  // simple pipe that transforms currency value by adding the base currency text
  transform(currency: number): string {
    if(!this.base){
      return currency.toString();
    }
    return `${currency} ${this.base}`
  }
}