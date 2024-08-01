import { Recipe, RecipeDetail, GUID, UpdateRecipeDTO, IngredientDTO, Id, UpdateRecipe } from "../types/recipes";
import { Method, request } from "../../../shared/helpers/api_helper";

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

export const createRecipe = async (recipe: UpdateRecipe): Promise<Id> => {
    const request_url: string = process.env.REACT_APP_RECIPE_URL ? process.env.REACT_APP_RECIPE_URL.toString() : "";
    if (!request_url) {
        console.error("REACT_APP_RECIPE_URL not set");
        return {} as Id;
    }
    let created_recipe = await request(
        request_url, Method.POST, recipe);
    return created_recipe as Id;
}

export const deleteRecipe = async (id: GUID, deletingUserId: GUID): Promise<boolean> => {
    const request_url: string = process.env.REACT_APP_RECIPE_URL ? process.env.REACT_APP_RECIPE_URL.toString() : "";
    if (!request_url) {
        console.error("REACT_APP_RECIPE_URL not set");
        return false;
    }
    const body = {
        recipe_id: id,
        deleting_user_id: deletingUserId
    }
    await request(
        request_url, Method.DELETE, body);
    return true;
}
