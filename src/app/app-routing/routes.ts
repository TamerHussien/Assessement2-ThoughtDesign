import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';

import { SchooldetailComponent } from '../schooldetail/schooldetail.component';

export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    {path: 'schooldetail/:id', component: SchooldetailComponent}
    // { path: '', redirectTo: '/home', pathMatch: 'full' }
];
