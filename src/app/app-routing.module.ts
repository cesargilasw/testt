import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LoggedInAuthGuard } from './_helpers/loggedIn-auth.guard';
import { ListComponent } from './pages/list/list.component';

// Validacion de Ruta AuthGuard
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'list', component: ListComponent},
  { path: 'login', component: LoginComponent, canActivate: [LoggedInAuthGuard] },
  { path: 'admin-panel', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'user-panel', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
