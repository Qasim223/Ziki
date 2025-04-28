import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isDropDownOpen = signal(false);
  isMobileMenuOpen = signal(false);

  private dropdownElement: ElementRef;

  constructor(private elementRef: ElementRef) {
    this.dropdownElement = elementRef;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (
      this.isDropDownOpen() &&
      !this.dropdownElement.nativeElement
        .quertSelector('#dropdown-container')
        .contains(event.target)
    ) {
      this.isDropDownOpen.set(false);
    }
  }

  toggleDropdowm(event: Event) {
    event.stopPropagation();
    this.isDropDownOpen.set(!this.isDropDownOpen());
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }
}
