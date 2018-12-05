import { Recipe } from "./recipe.model";

export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://www.skinnytaste.com/wp-content/uploads/2018/02/breakfast-pizza-1-8.jpg"
    ),
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://www.skinnytaste.com/wp-content/uploads/2018/02/breakfast-pizza-1-8.jpg"
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
