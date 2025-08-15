import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariableService {

  showModal = new BehaviorSubject(false)
  constructor() { }
}
