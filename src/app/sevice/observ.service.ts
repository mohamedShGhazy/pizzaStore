import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservService {
  allPizza = new BehaviorSubject(null);
  pizzaAsObs = this.allPizza.asObservable();
  cart = new BehaviorSubject(null);
  getCart = this.cart.asObservable();

  constructor() { }

  pizzaUpdate(update) {
    this.allPizza.next(update);
  }
 setCart(cartOrder){
  this.cart.next(cartOrder);
 }
}
