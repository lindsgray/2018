import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToCComponent } from './to-c/to-c.component';

const appRoutes: Routes = [
    {
        path: '',
        component: ToCComponent
    },
    {
        path: '**',
        component: ToCComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class RoutingModule { }