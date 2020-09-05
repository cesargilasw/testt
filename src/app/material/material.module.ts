import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';

const MaterialComponents = [
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatSortModule
];
@NgModule({
  imports: [
    MaterialComponents
  ], 
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
