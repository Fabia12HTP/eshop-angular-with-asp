import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { AuthenticationService } from '../api-authorization/authentication.service';
import { NgIf } from '@angular/common';
import { DarkModeService } from '../dark-mode/dark-mode.service';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [
    RouterLink,
    MatToolbar,
    MatButton,
    NgIf
  ],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.css'
})
export class MainNavComponent {
  authService = inject(AuthenticationService);
  private router = inject(Router);

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  darkModeState = false;

  constructor(private darkModeService: DarkModeService) {
    this.darkModeService.getDarkModeState().subscribe(state => {
      this.darkModeState = state;
    });
  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
