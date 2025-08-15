import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { StatisticsComponent } from '../../components/statistics/statistics.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { PartnersComponent } from '../../components/partners/partners.component';
import { SchoolsComponent } from '../../components/schools/schools.component';
import { ReportGalleryComponent } from '../../components/report-gallery/report-gallery.component';
import { NewsComponent } from '../../components/news/news.component';
import { VideoComponent } from '../../components/video/video.component';
import { OlympiadsComponent } from '../../components/olympiads/olympiads.component';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

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
    OlympiadsComponent,
  ],
  templateUrl: './landing-content.component.html',
  styleUrl: './landing-content.component.scss',
})
export class LandingContentComponent {

  unSubscribe: Subject<void> = new Subject<void>();
  constructor(private route: ActivatedRoute) {}

  ngOnDestroy(): void {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }

  ngAfterViewInit(): void {
    this.route.queryParams
      .pipe(takeUntil(this.unSubscribe))
      .subscribe((params) => {
        const section = params['section'];
        if (section) {
          setTimeout(() => {
            const element = document.getElementById(section);

            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 30);
        }
      });
  }
}
