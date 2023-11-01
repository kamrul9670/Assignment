import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageDesignComponent } from './login-page-design/login-page-design.component';
import { LiveDashboardComponent } from './live-dashboard/live-dashboard.component';


const routes: Routes = [

  { path: 'loginPage', component: LoginPageDesignComponent },
  { path: 'dashBoard', component: LiveDashboardComponent }, 


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
