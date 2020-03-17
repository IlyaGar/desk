import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-manager/login-form/login-form.component';
import { DeskFormComponent } from './desk-manager/desk-form/desk-form.component';
import { MyTasksFormComponent } from './desk-manager/components/my-tasks-form/my-tasks-form.component';
import { NewRequestFormComponent } from './desk-manager/components/new-request-form/new-request-form.component';
import { ChatFormComponent } from './chat-manager/chat-form/chat-form.component';
import { ArchiveFormComponent } from './desk-manager/components/archive-form/archive-form.component';
import { AdminListAcceptedFormComponent } from './admin-manager/component/admin-list-accepted-form/admin-list-accepted-form.component';
import { AdminListNewTasksFormComponent } from './admin-manager/component/admin-list-new-tasks-form/admin-list-new-tasks-form.component';
import { ArchiveAdminFormComponent } from './admin-manager/component/archive-admin-form/archive-admin-form.component';
import { AdminFormComponent } from './admin-manager/admin-form/admin-form.component';
import { CreateNewObjectFormComponent } from './admin-manager/component/create-new-object-form/create-new-object-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/desk', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'desk', component: DeskFormComponent },
  { path: 'desk/my-tasks', component: MyTasksFormComponent },
  { path: 'desk/new-task', component: NewRequestFormComponent },
  { path: 'desk/chat', component: ChatFormComponent },
  { path: 'desk/archive', component: ArchiveFormComponent },
  { path: 'admin', component: AdminFormComponent },
  { path: 'admin/chat', component: ChatFormComponent },
  { path: 'admin/new-tasks', component: AdminListNewTasksFormComponent },
  { path: 'admin/my-in-work', component: AdminListAcceptedFormComponent },
  { path: 'admin/archive', component: ArchiveAdminFormComponent },
  { path: 'admin/create-object', component: CreateNewObjectFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
