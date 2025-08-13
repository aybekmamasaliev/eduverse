import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { StatisticsComponent } from "../../components/statistics/statistics.component";
import { FeaturesComponent } from "../../components/features/features.component";

@Component({
  selector: 'app-landing-content',
  imports: [BannerComponent, StatisticsComponent, FeaturesComponent],
  templateUrl: './landing-content.component.html',
  styleUrl: './landing-content.component.scss'
})
export class LandingContentComponent {

}
