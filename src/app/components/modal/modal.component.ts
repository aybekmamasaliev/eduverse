import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalVariableService } from '../../services/global-variable.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  show: boolean = true;

  constructor(public globalVar: GlobalVariableService) {}

  ngOnInit(): void {
    
  }

  hideModal(){
    this.globalVar.showModal.next(false)
  }

  

}
