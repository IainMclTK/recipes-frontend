export type GUID = string;

export type Recipe = {
    id: GUID;
    name: string;
    author_id: GUID;
}

export type Ingredient = {
    id: GUID;
    name: string;
}

export type RecipeDetail = {
    id: GUID;
    name: string;
    ingredients: Ingredient[];
    author_id: GUID;
    author_name: string;
}
