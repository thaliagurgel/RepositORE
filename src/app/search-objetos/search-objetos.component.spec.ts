import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchObjetosComponent } from './search-objetos.component';

describe('SearchObjetosComponent', () => {
  let component: SearchObjetosComponent;
  let fixture: ComponentFixture<SearchObjetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchObjetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchObjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
