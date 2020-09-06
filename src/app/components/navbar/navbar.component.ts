import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // Default the navbar is closed
  navbarOpen = false;
  constructor(private authenticationService: AuthService) { }

  ngOnInit() {
  }

  // Functionality of toggle button on responsive view
  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  // method to remove the session from the local storage and redirect the user to the home page.
  logout = () => this.authenticationService.logout();
}
