import { SuggestionsListRoutes } from './../suggestions-list/suggestions-list.routes';
import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const HomeRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'suggestionsList'
    },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'suggestionsList',
                loadChildren: () => import('../suggestions-list/suggestions-list.routes').then(m => m.SuggestionsListRoutes)
            },
            {
                path: 'suggestionDetail',
                loadChildren: () => import('../suggestion-detail/suggestion-detail.routes').then(m => m.SuggestionDetailRoutes)
            }
        ]
    }
];
