import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LANDING_ROUTING } from './routes/landing.routes';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent,
        children: LANDING_ROUTING,
    }
];
