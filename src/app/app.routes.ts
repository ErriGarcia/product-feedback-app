import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', 
        loadChildren: () => import('./pages/home/home.routes').then(m => m.HomeRoutes)
    },
    {
        path: 'login', 
        loadChildren: () => import('./pages/login/login.routes').then((m) => m.LoginRoutes)
    },
    {
        path: 'roadmap', 
        loadChildren: () => import('./pages/roadmap/roadmap.routes').then((m) => m.RoadMapRoutes)
    }
];