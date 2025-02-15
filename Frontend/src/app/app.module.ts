import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';
import {Error403Component} from './errorpages/error403/error403.component';
import {Error404Component} from './errorpages/error404/error404.component';
import {Error500Component} from './errorpages/error500/error500.component';
import {AdminManageSchemaListComponent} from "./admin-manage-schema-list/admin-manage-schema-list.component";
import {AdminUserFormComponent} from "./admin-user-form/admin-user-form.component";
import {AdminCreateSchemaFormComponent} from "./admin-create-schema-form/admin-create-schema-form.component";
import {AdminManageUserListComponent} from "./admin-manage-user-list/admin-manage-user-list.component";
import {LoginFormComponent} from './login-form/login-form.component';
import {
  TwoFactorAuthenticationFormComponent
} from './two-factor-authentication-form/two-factor-authentication-form.component';
import {UserSearchInterfaceComponent} from './user-search-interface/user-search-interface.component';
import {SearchResponseComponent} from './search-response/search-response.component';
import {UserAuthGuard} from './shared/auth-guards/user.auth.guard';
import {UserAdminAuthGuard} from './shared/auth-guards/user.admin.auth.guard';
import {AuthService} from './shared/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {
  AdminUserIsActiveToggleComponent
} from "./admin-user-is-active-toggle-component/admin-user-is-active-toggle-component";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SidebarComponent,
    HeaderComponent,
    Error403Component,
    Error404Component,
    Error500Component,
    AdminManageSchemaListComponent,
    AdminUserFormComponent,
    AdminCreateSchemaFormComponent,
    AdminManageUserListComponent,
    AdminUserIsActiveToggleComponent,
    LoginFormComponent,
    TwoFactorAuthenticationFormComponent,
    UserSearchInterfaceComponent,
    SearchResponseComponent,
    AdminUserIsActiveToggleComponent
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [AuthService, UserAuthGuard, UserAdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
