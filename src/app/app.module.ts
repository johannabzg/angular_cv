import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PresentationComponent } from './presentation/presentation.component';
import { MonXPComponent } from './mon-xp/mon-xp.component';
import { MesCompetencesComponent } from './mes-competences/mes-competences.component';
import { ContactComponent } from './contact/contact.component';
import { MentionsComponent } from './mentions/mentions.component';
import { FormsModule }   from '@angular/forms';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';

/*animation*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  { path: '', redirectTo: '/presentation', pathMatch: 'full'},
  { path: 'presentation', component: PresentationComponent  },
  { path: 'experiences', component: MonXPComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'competence', component: MesCompetencesComponent },
  { path: 'portfolio', component: MyPortfolioComponent},
  { path: 'mentions', component:  MentionsComponent }
     
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PresentationComponent,
    MonXPComponent,
    MesCompetencesComponent,
    ContactComponent,
    MyPortfolioComponent,
    MentionsComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    RouterModule.forRoot(appRoutes),
    Angular2ImageGalleryModule,
    BrowserAnimationsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})





export class AppModule { }
