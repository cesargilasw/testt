import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminPanelComponent } from '../pages/admin-panel/admin-panel.component';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [AdminPanelComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatTableModule,
  ]
})
export class AdminModule { }
