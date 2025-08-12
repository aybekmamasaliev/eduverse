import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
