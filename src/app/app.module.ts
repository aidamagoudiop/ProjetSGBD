import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DashoardEnseignantComponent } from './dashoard-enseignant/dashoard-enseignant.component';
import { DashoardEtudiantComponent } from './dashoard-etudiant/dashoard-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    DashoardEnseignantComponent,
    DashoardEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
