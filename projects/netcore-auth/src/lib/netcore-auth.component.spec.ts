import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetcoreAuthComponent } from './netcore-auth.component';

describe('NetcoreAuthComponent', () => {
  let component: NetcoreAuthComponent;
  let fixture: ComponentFixture<NetcoreAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetcoreAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetcoreAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
