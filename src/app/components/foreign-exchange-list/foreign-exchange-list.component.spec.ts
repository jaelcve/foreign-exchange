import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignExchangeListComponent } from './foreign-exchange-list.component';

describe('ForeignExchangeListComponent', () => {
  let component: ForeignExchangeListComponent;
  let fixture: ComponentFixture<ForeignExchangeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeignExchangeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignExchangeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
