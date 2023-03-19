import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private roter:Router){}
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  about(about:any){
    this.roter.navigateByUrl('home#aboutus')
    console.log(about)
  }
  contactus(contact:any){
    this.roter.navigateByUrl('curriculum#contact-us')
    console.log(contact)
  }

}
