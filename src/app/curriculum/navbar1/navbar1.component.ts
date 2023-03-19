import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component {
    constructor(private route:Router){

    }
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
 
  gotoPage(page:any){
      this.route.navigateByUrl('curriculum#'+'program')
      console.log(page)
  }
  gotoFees(fees:any){
    this.route.navigateByUrl('curriculum#'+'fees')
    console.log(fees)
  } 
  gotoContactUs(contactUs:any){
    this.route.navigateByUrl('curriculum#contact-us')
    console.log(contactUs)
  }


}
