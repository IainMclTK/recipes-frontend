import { Recipe, RecipeDetail, GUID, UpdateRecipeDTO, IngredientDTO, Id } from "../types/recipes";
import { Method, request } from "../../../helpers/api_helper";

export const getRecipes = async (): Promise<Recipe[]> => {
    const request_url: string = process.env.REACT_APP_RECIPE_URL ? process.env.REACT_APP_RECIPE_URL.toString() : "";
    if (!request_url) {
        console.error("REACT_APP_RECIPE_URL not set");
        return [] as Recipe[];
    }
    let recipes = await request(
        request_url, Method.GET);
    recipes = recipes.recipes as Recipe[];
    return recipes;
}

export const getRecipe = async (id: string): Promise<RecipeDetail> => {
    const request_url: string = process.env.REACT_APP_RECIPE_URL ? process.env.REACT_APP_RECIPE_URL.toString() : "";
    if (!request_url) {
        console.error("REACT_APP_RECIPE_URL not set");
        return {} as RecipeDetail;
    }
    let recipe = await request(
        request_url + "/" + id, Method.GET);
    console.log(recipe);
    return recipe;
}

export const updateRecipe = async (recipe: UpdateRecipeDTO): Promise<Id> => {
    const request_url: string = process.env.REACT_APP_RECIPE_URL ? process.env.REACT_APP_RECIPE_URL.toString() : "";
    if (!request_url) {
        console.error("REACT_APP_RECIPE_URL not set");
        return {} as Id;
    }
    let updated_recipe = await request(
        request_url, Method.PUT, recipe);
    return updated_recipe as Id;
}
