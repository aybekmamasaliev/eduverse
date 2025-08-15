import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";
import { ModalComponent } from "../../components/modal/modal.component";


@Component({
  selector: 'app-home',
  imports: [HeaderComponent, RouterOutlet, FooterComponent, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
