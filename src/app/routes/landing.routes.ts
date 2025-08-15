// src/app/pages/landing/landing.routes.ts
import { Routes } from '@angular/router';
import { LandingContentComponent } from '../pages/landing-content/landing-content.component';
import { SpecificEventComponent } from '../pages/specific-event/specific-event.component';
import { AllNewsComponent } from '../components/all-news/all-news.component';

export const LANDING_ROUTING: Routes = [
  {path: "", component : LandingContentComponent},
  {path: "event/:id", component : SpecificEventComponent},
  {path: "news", component : AllNewsComponent}
];
