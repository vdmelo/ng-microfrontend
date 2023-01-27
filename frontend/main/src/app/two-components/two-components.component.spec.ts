import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoComponentsComponent } from './two-components.component';

describe('TwoComponentsComponent', () => {
  let component: TwoComponentsComponent;
  let fixture: ComponentFixture<TwoComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
