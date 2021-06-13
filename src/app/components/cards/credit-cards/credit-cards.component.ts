import { Component, OnInit } from '@angular/core';
import {faUserCircle, faCreditCard, faCalendarAlt, faKey, faSave} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.css']
})
export class CreditCardsComponent implements OnInit {

  faUserCircle = faUserCircle;
  faCreditCard = faCreditCard;
  faCalendarAlt = faCalendarAlt;
  faKey = faKey;
  faSave = faSave;
  
  constructor() { }

  ngOnInit(): void {
  }

}
