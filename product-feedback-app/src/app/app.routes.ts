import { Routes } from '@angular/router';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {'path': '', component: HomeComponent},
    {'path': 'addfeedback', component: AddFeedbackComponent}
];
