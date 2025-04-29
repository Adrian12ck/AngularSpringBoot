import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticatedGuard } from './guards/authenticated.guard';

export const routes: Routes = [
    {
        path: 'reuniones',
        loadComponent: () => import('./reuniones/reuniones.component'),
        canActivate: [AuthGuard],
        children: [
            
            {
                path: '',
                redirectTo: '',
                pathMatch: 'full',
            }

        ]
    },
    {
        path: 'agregar-reunion',
        loadComponent: ()=> import('./agregar-reuniones/agregar-reuniones.component'),
        canActivate: [AuthGuard]
    },
    {
        path: '',
        loadComponent: ()=> import('./login/login.component'),
        canActivate: [AuthenticatedGuard]

    }
];
