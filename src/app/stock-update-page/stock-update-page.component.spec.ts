import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockUpdatePageComponent } from './stock-update-page.component';

describe('StockUpdatePageComponent', () => {
  let component: StockUpdatePageComponent;
  let fixture: ComponentFixture<StockUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockUpdatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
