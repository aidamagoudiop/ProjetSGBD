import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {
    path: 'accueil', 
    component: AccueilComponent
  },
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'login', 
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
