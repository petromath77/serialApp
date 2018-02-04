import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SerialsComponent } from './serials/serials.component';
import { SerialsEditComponent } from './serials/serials-edit/serials-edit.component';
import { SerialsDetailComponent } from './serials/serials-detail/serials-detail.component';
import { CarouselComponent } from './carousel/carousel.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: CarouselComponent },
    {path: 'serials', component: SerialsComponent, children:[
        {path: ':id', component: SerialsDetailComponent}
    ]},
    {path: 'new', component: SerialsEditComponent},
    //{path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }