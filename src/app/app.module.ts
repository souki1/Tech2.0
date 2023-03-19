import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './home/body/body.component';
import { ContentComponent } from './home/content/content.component';
import { SigninComponent } from './signin/signin.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { FeesComponent } from './curriculum/fees/fees.component';
import { ContactUsComponent } from './curriculum/contact-us/contact-us.component';
import { ProgramComponent } from './curriculum/program/program.component';
import { CommonModule } from '@angular/common';
import { Navbar1Component } from './curriculum/navbar1/navbar1.component';
import { HireFromUsComponent } from './hire-from-us/hire-from-us.component';
import { Navbar2Component } from './hire-from-us/navbar2/navbar2.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    ContentComponent,
    SigninComponent,
    CurriculumComponent,
    FeesComponent,
    ContactUsComponent,
    ProgramComponent,
    Navbar1Component,
    HireFromUsComponent,
    Navbar2Component,
    AboutusComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
