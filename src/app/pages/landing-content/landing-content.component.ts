import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { StatisticsComponent } from '../../components/statistics/statistics.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { PartnersComponent } from '../../components/partners/partners.component';
import { SchoolsComponent } from '../../components/schools/schools.component';
import { ReportGalleryComponent } from '../../components/report-gallery/report-gallery.component';
import { NewsComponent } from "../../components/news/news.component";
import { VideoComponent } from "../../components/video/video.component";
import { OlympiadsComponent } from "../../components/olympiads/olympiads.component";

@Component({
  selector: 'app-landing-content',
  imports: [
    BannerComponent,
    StatisticsComponent,
    FeaturesComponent,
    PartnersComponent,
    SchoolsComponent,
    ReportGalleryComponent,
    NewsComponent,
    VideoComponent,
    OlympiadsComponent
],
  templateUrl: './landing-content.component.html',
  styleUrl: './landing-content.component.scss',
})
export class LandingContentComponent {}
