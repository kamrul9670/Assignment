import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageDesignComponent } from './login-page-design.component';

describe('LoginPageDesignComponent', () => {
  let component: LoginPageDesignComponent;
  let fixture: ComponentFixture<LoginPageDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageDesignComponent]
    });
    fixture = TestBed.createComponent(LoginPageDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
