import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutePageComponent } from './route-page.component';

describe('RouteDetailPageComponent', () => {
  let component: RoutePageComponent;
  let fixture: ComponentFixture<RoutePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
