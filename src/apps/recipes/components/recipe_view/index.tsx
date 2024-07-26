import { useState, useEffect } from "react";
import { RecipeDetail, UpdateRecipe, UpdateRecipeDTO } from "../../types/recipes";
import { updateRecipe } from "../../services/recipe_service"
import * as S from "./styles";

export interface Props {
  recipe: RecipeDetail | null;
}

export const RecipeView = (props: Props) => {
  const toTitleCase = (str: string) => {
    return str.replace(/_/g, ' ').replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  // TODO: Pass through the user info
  const canEdit = (author_id: string) => {
    return author_id === props.recipe?.author_id;
  }

  const saveRecipe = () => {
    setEditing(false);
    const ingredients = newIngredients
      .filter(ingredient => ingredient !== "")
      .map(ingredient => ({ name: ingredient }));

    setNewIngredients(ingredients.map(ingredient => ingredient.name));

    const updatedRecipe = {
      name: props.recipe!.name,
      author_id: props.recipe!.author_id,
      author_name: props.recipe!.author_name,
      ingredients: ingredients
    } as UpdateRecipe

    const dto = {
      id: props.recipe!.id,
      recipe: updatedRecipe
    } as UpdateRecipeDTO
    updateRecipe(dto);
  }

  const [editing, setEditing] = useState<boolean>(false);
  const [newIngredients, setNewIngredients] = useState<string[]>([]);

  useEffect(() => {
    setNewIngredients(props.recipe ? props.recipe.ingredients.map(ingredient => ingredient.name) : []);
  }, [props.recipe]);

  return (
    props.recipe ? (
      <S.RecipeView>
        <S.Info>
          <S.Title>{toTitleCase(props.recipe.name)}</S.Title>
          <S.Author>by {toTitleCase(props.recipe.author_name)}</S.Author>
        </S.Info>
        <S.Ingredients>
          <S.IngredientsHeader>
            <S.Title>Ingredients</S.Title>
            {canEdit(props.recipe.author_id) &&
              <S.EditButton onClick={() => {
                if (editing) {
                  // Save
                  saveRecipe();
                } else {
                  // Edit
                  setEditing(true);
                }
              }
              }>
                {editing ?
                  "Save"
                  : "Edit"}
              </S.EditButton>
            }
          </S.IngredientsHeader>
          <S.List>
            {newIngredients.map((ingredient, index) => (
              editing ? (
                <S.ListItem key={index}>
                  <S.Input type="text" value={ingredient} onChange={(e) => {
                    const newIncredientsCopy = [...newIngredients];
                    newIncredientsCopy[index] = e.target.value;
                    setNewIngredients(newIncredientsCopy);
                  }} />
                  <S.DeleteButton onClick={() => setNewIngredients(newIngredients.filter((_, i) => i !== index))} >
                    <span>&#10006;</span>
                  </S.DeleteButton>
                </S.ListItem>
              ) : (
                <S.ListItem key={index}>{toTitleCase(ingredient)}</S.ListItem>
              )
            ))}
          </S.List>
          {editing && (
            <S.ActionButtons>
              <S.AddButton onClick={() => setNewIngredients([...newIngredients, ""])}>
                Add Ingredient
              </S.AddButton>

              <S.AddButton onClick={saveRecipe}>
                Save Recipe
              </S.AddButton>
            </S.ActionButtons>
          )}
        </S.Ingredients>
      </S.RecipeView >
    ) : (<div>loading...</div>)
  );
}
