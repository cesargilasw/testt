import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { AuthGuard } from './_helpers/auth.guard';
import { Role } from './enum/Role';
import { LoggedInAuthGuard } from './_helpers/loggedIn-auth.guard';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';

// Validacion de Ruta AuthGuard
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent, canActivate: [LoggedInAuthGuard] },
  { path: 'admin-panel', component: AdminPanelComponent, data: { roles: [Role.Admin] }, canActivate: [AuthGuard] },
  { path: 'user-panel', component: UserPanelComponent, data: { roles: [Role.User] }, canActivate: [AuthGuard] },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
