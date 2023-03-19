import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { ContactUsComponent } from './curriculum/contact-us/contact-us.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { FeesComponent } from './curriculum/fees/fees.component';
import { ProgramComponent } from './curriculum/program/program.component';
import { HireFromUsComponent } from './hire-from-us/hire-from-us.component';

import { BodyComponent } from './home/body/body.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },{
    path:"" ,redirectTo:"/home",pathMatch:"full"
  },{
    path:"curriculum",component:CurriculumComponent,
  },{
    path:"Hire-from-us",component:HireFromUsComponent
  },
  {
    path:"fees",component:FeesComponent
  },{
    path:"program",component:ProgramComponent
  },{
    path:"contact-us",component:ContactUsComponent
  },{
    path:"about-us",component:AbortController
  }
];

const routerOptions:ExtraOptions = {
  scrollPositionRestoration:"enabled",
  anchorScrolling:'enabled',
}

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
