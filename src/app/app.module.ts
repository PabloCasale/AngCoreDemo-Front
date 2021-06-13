import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardsComponent } from './components/cards/cards.component';
import { CreditCardsComponent } from './components/cards/credit-cards/credit-cards.component';
import { ListCardsComponent } from './components/cards/list-cards/list-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CreditCardsComponent,
    ListCardsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
