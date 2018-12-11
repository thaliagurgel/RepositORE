import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMetadatosComponent } from './show-metadatos.component';

describe('ShowMetadatosComponent', () => {
  let component: ShowMetadatosComponent;
  let fixture: ComponentFixture<ShowMetadatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMetadatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMetadatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
