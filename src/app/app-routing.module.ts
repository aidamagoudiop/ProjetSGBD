import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DashoardEtudiantComponent } from './dashoard-etudiant/dashoard-etudiant.component';
import { DashoardEnseignantComponent } from './dashoard-enseignant/dashoard-enseignant.component';


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
  },
  {
    path: 'dashboard-etudiant', 
    component: DashoardEtudiantComponent
  },
  {
    path: 'dashboard-enseignant', 
    component: DashoardEnseignantComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
