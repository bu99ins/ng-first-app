import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put(
      // not POST, because PUT overwrites existing data to firebase
      "https://ng-recipe-book-cfad6.firebaseio.com/recipes.json",
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    return this.http
      .get("https://ng-recipe-book-cfad6.firebaseio.com/recipes.json", {
        observe: "response"
      })
      .pipe(
        map((response: HttpResponse<Recipe[]>) => {
          for (let recipe of response.body)
            if (!recipe["ingredients"]) recipe["ingredients"] = [];
          return response.body;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
