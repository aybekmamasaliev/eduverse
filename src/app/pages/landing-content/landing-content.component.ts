import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { StatisticsComponent } from "../../components/statistics/statistics.component";
import { FeaturesComponent } from "../../components/features/features.component";
import { PartnersComponent } from "../../components/partners/partners.component";
import { SchoolsComponent } from "../../components/schools/schools.component";

@Component({
  selector: 'app-landing-content',
  imports: [BannerComponent, StatisticsComponent, FeaturesComponent, PartnersComponent, SchoolsComponent],
  templateUrl: './landing-content.component.html',
  styleUrl: './landing-content.component.scss'
})
export class LandingContentComponent {

}
