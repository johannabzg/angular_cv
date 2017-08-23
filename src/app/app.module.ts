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
import { FormsModule }   from '@angular/forms';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';

import 'web-animations-js/web-animations.min';
import 'hammerjs/hammer';

import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/set';

import 'web-animations-js';


const appRoutes: Routes = [
  { path: 'presentation', component: PresentationComponent  },
  { path: 'experiences', component: MonXPComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'competence', component: MesCompetencesComponent },
  { path: 'portfolio', component: MyPortfolioComponent}
     
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
    MyPortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    RouterModule.forRoot(appRoutes),
    Angular2ImageGalleryModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


