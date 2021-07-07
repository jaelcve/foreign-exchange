import { of } from "rxjs/internal/observable/of";
import { ForeignExchangeService } from "./foreign-exchange.service";

let httpClientSpy: { get: jasmine.Spy };
let foreignExchangeService: ForeignExchangeService;

beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  foreignExchangeService = new ForeignExchangeService(httpClientSpy as any);
});

it('should return expected base currency', (done: DoneFn) => {
  const expectedBaseCurrency = {
    provider: "https://www.exchangerate-api.com",
    WARNING_UPGRADE_TO_V6: "https://www.exchangerate-api.com/docs/free",
    terms: "https://www.exchangerate-api.com/terms",
    base:  "GBP",
    date: "2021-07-07",
    time_last_updated: 1625616001,
    rates: {
      AED: 5.08,
      AFN: 109.95,      
      ALL: 143.05
    }
  };

  httpClientSpy.get.and.returnValue(of(expectedBaseCurrency));

  foreignExchangeService.getForeignExchange().subscribe(
    foreignExhanges => {
      expect(foreignExhanges.base).toEqual(expectedBaseCurrency.base);
      done();
    },
    done.fail
  );
  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});


