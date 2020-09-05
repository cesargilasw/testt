import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPanelComponent } from '../pages/user-panel/user-panel.component';
import { Role } from '../enum/Role';
import { AuthGuard } from '../_helpers/auth.guard';


const routes: Routes = [
  { path: '', component: UserPanelComponent, data: { roles: [Role.User] }, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
