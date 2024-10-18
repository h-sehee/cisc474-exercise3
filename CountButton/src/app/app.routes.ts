import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'view', loadComponent: () => import('./view/view.component').then(m => m.ViewComponent)},]
    ;
