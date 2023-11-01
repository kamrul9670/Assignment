import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LiveDashboardComponent } from './live-dashboard/live-dashboard.component';
import { LoginPageDesignComponent } from './login-page-design/login-page-design.component'; 



@NgModule({
  declarations: [
    AppComponent,
    LiveDashboardComponent,
    LoginPageDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
