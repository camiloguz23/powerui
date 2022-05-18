import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelepeerComponent } from './intelepeer.component';

describe('IntelepeerComponent', () => {
  let component: IntelepeerComponent;
  let fixture: ComponentFixture<IntelepeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntelepeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntelepeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
