import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private darkModeState = new BehaviorSubject<boolean>(false);

  constructor() { }

  getDarkModeState() {
    return this.darkModeState.asObservable();
  }

  toggleDarkMode() {
    const currentState = this.darkModeState.value;
    this.darkModeState.next(!currentState);
  }
}
