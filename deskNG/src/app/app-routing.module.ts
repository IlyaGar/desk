import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-manager/login-form/login-form.component';
import { DeskFormComponent } from './desk-manager/desk-form/desk-form.component';
import { AdminFormComponent } from './admin-manager/admin-form/admin-form.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: '', redirectTo: '/desk', pathMatch: 'full' },
  { path: 'desk', component: DeskFormComponent },
  { path: 'admin', component: AdminFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
