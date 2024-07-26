import { Recipe, RecipeDetail } from "../types/recipes";
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
    return recipe;
}
