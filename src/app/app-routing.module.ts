import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SerialsComponent } from './serials/serials.component';
import { SerialsEditComponent } from './serials-edit/serials-edit.component';
import { SerialsDetailComponent } from './serials-detail/serials-detail.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: HomeComponent },
    {path: 'serials', component: SerialsComponent},
    {path: 'serials/:id', component: SerialsDetailComponent},
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