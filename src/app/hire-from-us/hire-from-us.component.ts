import { Component } from '@angular/core';

@Component({
  selector: 'app-hire-from-us',
  templateUrl: './hire-from-us.component.html',
  styleUrls: ['./hire-from-us.component.css']
})
export class HireFromUsComponent {
  b:any
  c:boolean=false
data(){
  const a = "https://calendly.com/soukigirishkumar33"
}
call(){
  const c ="https://calendly.com/soukigirishkumar33/"
  this.b=c 
  this.c= true
}
ngOnInit(): void {
 window.Calendly.initInlineWidget({
    url: 'https://calendly.com/my-calendar-link',
    parentElement: document.querySelector('.calendly-inline-widget'),
  });
}
}
declare global { interface Window { Calendly: any; } } 