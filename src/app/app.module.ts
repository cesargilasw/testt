import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './components/navbar/navbar.component';

// Angular Material
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


//import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
//import {MatPaginatorModule} from '@angular/material/paginator';

// FontAwesomeModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';
import { CardItemComponent } from './components/card-item/card-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPanelComponent,
    HomeComponent,
    NavbarComponent,
    UserPanelComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    //MatPaginatorModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
