import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-manager/login-form/login-form.component';
import { DeskFormComponent } from './desk-manager/desk-form/desk-form.component';
import { AdminFormComponent } from './admin-manager/admin-form/admin-form.component';
import { MyTasksFormComponent } from './desk-manager/components/my-tasks-form/my-tasks-form.component';
import { NewRequestFormComponent } from './desk-manager/components/new-request-form/new-request-form.component';
import { ChatFormComponent } from './chat-manager/chat-form/chat-form.component';
import { EmptyFormComponent } from './common/components/empty-form/empty-form.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: '', redirectTo: '/desk', pathMatch: 'full' },
  { path: 'desk', component: DeskFormComponent },
  { path: 'desk/my-tasks', component: MyTasksFormComponent },
  { path: 'admin', component: AdminFormComponent },
  { path: 'desk/new-task', component: NewRequestFormComponent },
  { path: 'desk/chat', component: ChatFormComponent },
  // { path: 'empty', component: EmptyFormComponent },
  { path: 'desk/archive', component: EmptyFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
