import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesDetailComponent } from './shoes-detail.component';

describe('ShoesDetailComponent', () => {
  let component: ShoesDetailComponent;
  let fixture: ComponentFixture<ShoesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoesDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
