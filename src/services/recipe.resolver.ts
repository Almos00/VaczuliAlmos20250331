
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeService } from './recipe.service';
import { Recipe } from '../models/recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeResolver implements Resolve<Recipe> {
  constructor(private recipeService: RecipeService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Recipe> {
    const id = parseInt(route.paramMap.get('id')!, 10);
    return this.recipeService.getRecipeById(id);
  }
}