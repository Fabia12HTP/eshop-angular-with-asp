import { Component, OnInit } from '@angular/core';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RouterOutlet } from '@angular/router';
import { DarkModeService } from './dark-mode/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MainNavComponent, RouterOutlet]
})
export class AppComponent implements OnInit {
  title = 'angular-project';
  darkModeState = false;

  constructor(private darkModeService: DarkModeService
  ) { }


  ngOnInit(): void {
    this.darkModeService.getDarkModeState().subscribe(state => {
      this.darkModeState = state;
    });
  }

  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }
}
