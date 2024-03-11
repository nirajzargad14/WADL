import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignUpModel, SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'layout', component: LayoutComponent },
  { path: '**', redirectTo: '/signin', pathMatch: 'full' },
  { path: '***', redirectTo: '/signup', pathMatch: 'full' },
  { path: '****', redirectTo: '/layout', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
