import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { RecipeService } from "../recipes/recipe.service";

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecepies() {
    return this.http.put(
      // not POST, because PUT overwrites existing data to firebase
      "https://ng-recipe-book-cfad6.firebaseio.com/recipes.json",
      this.recipeService.getRecipes()
    );
  }
}
