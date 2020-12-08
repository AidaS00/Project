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
import {DeactivateGuard} from './deactivate.guard';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule} from "@angular/common/http";
import {LoggingService} from './service/logging.service';
import {DogsharedService} from './service/dogshared.service';
import {CatService} from './service/cat.service';
import {ChildcatService} from './service/childcat.service';
import {ChilddogService} from './service/childdog.service';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Dog', component: DogComponent},
  {path: 'Cat', component: CatComponent},
  {path: 'Volunteer', component: VolunteerComponent, canDeactivate: [DeactivateGuard]},
  {path: 'Login', component: LoginComponent},
  {path: 'Register', component: RegisterComponent, canDeactivate: [DeactivateGuard]}
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
    RegisterComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [DeactivateGuard,
    LoggingService,
    DogsharedService,
  CatchildComponent,
  CatService,
  ChildcatService,
  ChilddogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
