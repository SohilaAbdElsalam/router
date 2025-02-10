import { Component } from '@angular/core';
import { MealsService } from '../services/meals.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { get } from 'node:http';

@Component({
  selector: 'app-meals-datels',
  imports: [RouterLink],
  templateUrl: './meals-datels.component.html',
  styleUrl: './meals-datels.component.scss'
})
export class MealsDatelsComponent {
  categories:any;
  meals:any;
constructor(private _MealsService:MealsService, private _ActivatedRoute:ActivatedRoute){}
ngOnInit(): void{
  if(typeof document!= 'undefined'){
    this._MealsService.getAllCategories().subscribe((res)=>{
      this.categories= res.meals;
    });
    

    this._ActivatedRoute.paramMap.subscribe((params)=>{
           const categoryName=params.get('categoryName');
           if(categoryName){
          this._MealsService.getMealsByCategory(categoryName).subscribe((res)=>{
            this.meals=res.meals;
         });
        }
    })
  }
 
};
}
