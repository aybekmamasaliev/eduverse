import { Component } from '@angular/core';
import { GlobalVariableService } from '../../services/global-variable.service';

@Component({
  selector: 'app-schools',
  imports: [],
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.scss'
})
export class SchoolsComponent {

  constructor(private globalvar: GlobalVariableService){}

  openModal(){
    this.globalvar.showModal.next(true)
  }
}
