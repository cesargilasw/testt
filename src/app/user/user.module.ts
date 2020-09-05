import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserPanelComponent } from '../pages/user-panel/user-panel.component';
import { CardItemComponent } from '../components/card-item/card-item.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [UserPanelComponent,CardItemComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatCardModule
  ]
})
export class UserModule { }
