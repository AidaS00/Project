import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { ChilddogComponent } from './childdog/childdog.component';
import { CatchildComponent } from './catchild/catchild.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import {VolunteerGuard} from './volunteer.guard';
import {DeactivateGuard} from './deactivate.guard';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Dog', component: DogComponent},
  {path: 'Cat', component: CatComponent},
  {path: 'Volunteer', component: VolunteerComponent, canActivate: [VolunteerGuard], canDeactivate: [DeactivateGuard]},
  {path: 'Login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DogComponent,
    CatComponent,
    LoginComponent,
    ChilddogComponent,
    CatchildComponent,
    NavbarComponent,
    VolunteerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [VolunteerGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
