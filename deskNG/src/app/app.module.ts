import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarFormComponent } from './navbar-manager/navbar-form/navbar-form.component';
import { LoginFormComponent } from './login-manager/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './common/models/material-module';
import { CookieService } from 'ngx-cookie-service';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppBootstrapModule } from './common/models/app-bootstrap-module';
import { AttentionFormComponent } from './dialog-windows/attention-dialog/attention-form/attention-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { NgxPrintModule } from 'ngx-print';
import { DeskFormComponent } from './desk-manager/desk-form/desk-form.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NewRequestFormComponent } from './desk-manager/components/new-request-form/new-request-form.component';
import { ChatFormComponent } from './chat-manager/chat-form/chat-form.component';
import { ListPersonRequestFormComponent } from './desk-manager/components/list-person-request-form/list-person-request-form.component';
import { ImageFormComponent } from './chat-manager/dialog-windows/image-form/image-form.component';
import { AdminListNewTasksFormComponent } from './admin-manager/component/admin-list-new-tasks-form/admin-list-new-tasks-form.component';
import { AdminListAcceptedFormComponent } from './admin-manager/component/admin-list-accepted-form/admin-list-accepted-form.component';
import { RequestFormComponent } from './admin-manager/component/request-form/request-form.component';
import { ArchiveAdminFormComponent } from './admin-manager/component/archive-admin-form/archive-admin-form.component';
import { VerticalMenuFormComponent } from './vertical-menu/vertical-menu-form/vertical-menu-form.component';
import { MyTasksFormComponent } from './desk-manager/components/my-tasks-form/my-tasks-form.component';
import { ListTasksFormComponent } from './desk-manager/components/list-tasks-form/list-tasks-form.component';
import { EmptyFormComponent } from './common/components/empty-form/empty-form.component';
import { ThemeInfoFormComponent } from './vertical-menu/theme-info-form/theme-info-form.component';
import { ArchiveFormComponent } from './desk-manager/components/archive-form/archive-form.component';
import { AdminFormComponent } from './admin-manager/admin-form/admin-form.component';
import { CreateNewObjectFormComponent } from './admin-manager/component/create-new-object-form/create-new-object-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarFormComponent,
    LoginFormComponent,
    AttentionFormComponent,
    DeskFormComponent,
    NewRequestFormComponent,
    ChatFormComponent,
    ListPersonRequestFormComponent,
    ImageFormComponent,
    AdminListNewTasksFormComponent,
    AdminListAcceptedFormComponent,
    RequestFormComponent,
    ArchiveAdminFormComponent,
    VerticalMenuFormComponent,
    MyTasksFormComponent,
    ListTasksFormComponent,
    EmptyFormComponent,
    ThemeInfoFormComponent,
    ArchiveFormComponent,
    AdminFormComponent,
    CreateNewObjectFormComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    PinchZoomModule,
    HttpClientModule,
    AppRoutingModule,
    DemoMaterialModule,
    AppBootstrapModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    NgScrollbarModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })
  ],
  providers: [
    HttpClient,
    CookieService,
  ],
  entryComponents: [
    AttentionFormComponent,
    NavbarFormComponent,
    ImageFormComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
