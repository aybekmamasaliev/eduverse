import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { StatisticsComponent } from "../../components/statistics/statistics.component";

@Component({
  selector: 'app-landing-content',
  imports: [BannerComponent, StatisticsComponent],
  templateUrl: './landing-content.component.html',
  styleUrl: './landing-content.component.scss'
})
export class LandingContentComponent {

}
