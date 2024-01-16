import { RoadmapDetailRoutes } from './../roadmap-detail/roadmap-detail.routes';
import { Routes } from '@angular/router';
import { RoadmapComponent } from './roadmap.component';

export const RoadMapRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'roadmapList'
    },
    {
        path: '', 
        component: RoadmapComponent, 
        children: [
            {
                path: 'roadmapList',
                loadChildren: () => import('../roadmap-list/roadmap-list.routes').then(m => m.RoadmapListRoutes)
            },
            {
                path: 'roadmapDetail',
                loadChildren: () => import('../roadmap-detail/roadmap-detail.routes').then(m => m.RoadmapDetailRoutes)
            }
        ]
    },
];
