import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxsModule } from '@ngxs/store';

import { ForeignExchangeListComponent } from './foreign-exchange-list.component';

describe('ForeignExchangeListComponent', () => {
  let component: ForeignExchangeListComponent;
  let fixture: ComponentFixture<ForeignExchangeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeignExchangeListComponent ],
      imports: [
        HttpClientModule,
        MatGridListModule,
        NgxsModule.forRoot()
      ]
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

  it('should set the right gridHeight', () => {
    expect(component.largeScreen).toEqual(992);
    if(window.innerHeight <= component.largeScreen) {
      expect(component.gridHeight).toEqual('2:2')
    }else{
      expect(component.gridHeight).toEqual('2:1')
    }
  })
});
