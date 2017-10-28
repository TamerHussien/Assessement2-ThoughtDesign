import { Routes } from '@angular/router';



import { ScienceComponent } from '../science/science.component';


import { QuizformComponent } from '../quizform/quizform.component';

import { SchooldetailComponent } from '../schooldetail/schooldetail.component';

export const routes: Routes = [
    {path: 'schooldetail/:id', component: SchooldetailComponent},
    {path: 'schooldetail/:id/:name', component: ScienceComponent},
    {path: 'schooldetail/:id/:name/:quiz', component: QuizformComponent}
        // { path: '', redirectTo: '/home', pathMatch: 'full' }
];
