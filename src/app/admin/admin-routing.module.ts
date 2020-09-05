import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from '../pages/admin-panel/admin-panel.component';
import { Role } from '../enum/Role';
import { AuthGuard } from '../_helpers/auth.guard';

const routes: Routes = [
  { path: '', component: AdminPanelComponent, data: { roles: [Role.Admin] }, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
