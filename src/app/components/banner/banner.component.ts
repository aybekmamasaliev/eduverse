import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { GlobalVariableService } from '../../services/global-variable.service';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  constructor(private globalVar: GlobalVariableService) {}

  ngOnInit(): void {}

  becomePartner() {
    this.globalVar.showModal.next(true);
  }
}
