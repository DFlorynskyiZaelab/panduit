import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout-main/layout-main.component').then(m => m.LayoutMainComponent),
        children: [
            {
                path: 'cross-ref/processing',
                loadComponent: () => import('./module-crossref-processing/hub-crossref-processing.component').then(m => m.HubCrossrefProcessingComponent),
            },
        ]
    },

];
