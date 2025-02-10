import { Routes } from '@angular/router';
import { MealsComponent } from './meals/meals.component';
import { MealsDatelsComponent } from './meals-datels/meals-datels.component';

export const routes: Routes = [
    {path:"", component:MealsComponent,children:[
        {path:"",redirectTo:"category/all",pathMatch:"full"},
        {path:"category/:categoryName",component:MealsDatelsComponent}
    ]}
];
