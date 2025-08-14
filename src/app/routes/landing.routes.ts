// src/app/pages/landing/landing.routes.ts
import { Routes } from '@angular/router';
import { LandingContentComponent } from '../pages/landing-content/landing-content.component';
import { SpecificEventComponent } from '../pages/specific-event/specific-event.component';

export const LANDING_ROUTING: Routes = [
  {path: "", component : LandingContentComponent},
  {path: "landing/event/:id", component : SpecificEventComponent}
];
