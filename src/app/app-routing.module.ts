import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {SignupComponent} from "./component/signup/signup.component";
import {AdminComponent} from "./component/admin/admin.component";
import {UserComponent} from "./component/user/user.component";
import {AdminAuthGuard} from "./helper/admin-auth-guard";
import {AuthGuard} from "./helper/auth-guard";
import {AppComponent} from "./app.component";

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
}, {
  path: 'register',
  component: SignupComponent,
}, {
  path: 'admin',
  canActivate: [AdminAuthGuard],
  component: AdminComponent
}, {
  path: 'user',
  component: UserComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
