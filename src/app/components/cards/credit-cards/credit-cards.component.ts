import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      id: 0,
      owner: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      expirationDate: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
  }

  saveCard() {
    console.log(this.form);
  }

}
