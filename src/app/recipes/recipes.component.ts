import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '..Recipes';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html'
})
export class UpdateRecipeComponent implements OnInit {
  recipeForm!: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    const recipe = this.route.snapshot.data['recipe'] as Recipe;
    this.recipeForm = this.fb.group({
      name: [recipe.name, [Validators.required]],
      prepTimeMinutes: [recipe.prepTimeMinutes, [Validators.required, Validators.min(5)]],
      cookTimeMinutes: [recipe.cookTimeMinutes, [Validators.required, Validators.min(5)]],
      cuisine: [recipe.cuisine, [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.recipeForm.valid) {
      console.log(this.recipeForm.value);
    }
  }
}