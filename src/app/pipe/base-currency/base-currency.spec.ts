import { async, TestBed, waitForAsync } from "@angular/core/testing";
import { NgxsModule, Store } from "@ngxs/store";
import { BaseCurrencyPipe } from "./base-currency.pipe"

describe('BaseCurrency', () => {
  let baseCurrency: BaseCurrencyPipe;
  let store: Store;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([])]
    })
    store = TestBed.inject(Store);
    spyOn(store, 'selectSnapshot').and.returnValue('GBP')
    baseCurrency = new BaseCurrencyPipe(store);
  }))

  it('should create an instance', () => {
    expect(baseCurrency).toBeTruthy();
  })

  it('should transform 1 to 1 GBP', () => {
    const currency = baseCurrency.transform(1);
    expect(currency).toEqual('1 GBP');
  })

})