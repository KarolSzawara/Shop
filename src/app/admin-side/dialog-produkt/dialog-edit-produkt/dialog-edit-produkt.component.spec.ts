import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditProduktComponent } from './dialog-edit-produkt.component';

describe('DialogEditProduktComponent', () => {
  let component: DialogEditProduktComponent;
  let fixture: ComponentFixture<DialogEditProduktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditProduktComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditProduktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
