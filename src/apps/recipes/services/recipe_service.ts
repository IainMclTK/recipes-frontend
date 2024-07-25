import * as T from "../types/recipes";
import { Method, request } from "../../../helpers/api_helper";

export const getRecipes = async () => {
    //const request_url: string = (process.env.REACT_APP_RECIPE_URL.toString() || "");

    const request_url: string = process.env.REACT_APP_RECIPE_URL ? process.env.REACT_APP_RECIPE_URL.toString() : "";
    if (!request_url) {
        console.error("REACT_APP_RECIPE_URL not set");
        return;
    }
    const recipes: T.Recipe[] = await request(
        request_url, Method.GET);
    return recipes;
}
