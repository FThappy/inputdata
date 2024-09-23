import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  isOpen = new BehaviorSubject<boolean>(true);
  isOpen$ = this.isOpen.asObservable();
  toggleSidebar(): boolean {
    this.isOpen.next(!this.isOpen.value);
    return this.isOpen.value;
  }
}
