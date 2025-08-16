import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const menuElement = document.getElementById('dropDownMenuLang');
    if (menuElement && !menuElement.contains(event.target as Node)) {
      this.showDrop = false;
    }
  }

  currentlang = new FormControl('en');

  showmenu: boolean = false;
  showDrop: boolean = false;

  lang = 'EN';

  constructor(private eRef: ElementRef, private router : Router) {}

  ngOnInit(): void {}

  toggleMenu() {
    this.showmenu = !this.showmenu;
  }

  hideLangs(lang: string) {
    this.currentlang.setValue(lang);
    setTimeout(() => {
      this.showDrop = false;
    }, 100);
  }

  navigateToSection(section: string) {
    this.router.navigate([''], { queryParams: { section: section } });
    this.showmenu = false;
  }
}
