import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component {
  constructor(private route:Router){

  }
isMenuOpen = false;

toggleMenu(): void {
  this.isMenuOpen = !this.isMenuOpen;
}
Fees(){
  this.route.navigate(['/fees'])
}
}
