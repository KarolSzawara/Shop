import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistSideComponent } from './regist-side.component';

describe('RegistSideComponent', () => {
  let component: RegistSideComponent;
  let fixture: ComponentFixture<RegistSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
