import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { By } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { ErrorComponent } from './error.component';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorComponent ],
      imports: [
        MatGridListModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call goBack() if clicked', fakeAsync(() => {
    spyOn(component, 'goBack');
    let btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();
    expect(component.goBack).toHaveBeenCalledWith();
  }))
  
});
