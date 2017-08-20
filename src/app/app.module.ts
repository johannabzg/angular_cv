import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PresentationComponent } from './presentation/presentation.component';
import { MonXPComponent } from './mon-xp/mon-xp.component';
import { MesCompetencesComponent } from './mes-competences/mes-competences.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
  { path: 'presentation', component: PresentationComponent },
  { path: 'experiences', component: MonXPComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'competence', component: MesCompetencesComponent }
     
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PresentationComponent,
    MonXPComponent,
    MesCompetencesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


