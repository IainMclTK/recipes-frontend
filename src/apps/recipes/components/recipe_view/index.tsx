import { useState, useEffect } from "react";
import { RecipeDetail, UpdateRecipe, UpdateRecipeDTO } from "../../types/recipes";
import { updateRecipe, deleteRecipe } from "../../services/recipe_service"
import { getUserState } from "../../../users/services/user_service";
import { InputField, ActionButton } from "../../../../shared/components";
import { useHistory } from "react-router-dom";
import * as S from "./styles";

export interface Props {
  recipe: RecipeDetail | null;
}

export const RecipeView = (props: Props) => {
  const user = getUserState();
  const history = useHistory();

  const toTitleCase = (str: string): string => {
    return str.replace(/_/g, ' ').replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  const canEdit = (author_id: string): boolean => {
    return author_id === user?.id;
  }

  const saveRecipe = () => {
    setEditing(false);
    const ingredients = newIngredients
      .filter(ingredient => ingredient !== "")
      .map(ingredient => ({ name: ingredient }));

    setNewIngredients(ingredients.map(ingredient => ingredient.name));

    const updatedRecipe = {
      name: props.recipe!.name,
      author_id: user?.id,
      author_name: user?.name,
      ingredients: ingredients
    } as UpdateRecipe

    const dto = {
      id: props.recipe!.id,
      recipe: updatedRecipe,
      updating_user_id: user!.id,
    } as UpdateRecipeDTO
    updateRecipe(dto);
  }

  const deleteCurrentRecipe = async () => {
    const success = await deleteRecipe(props.recipe!.id, user!.id);
    if (success) {
      history.push('/recipes');
    } else {
      // TODO: Show error message 'something went wrong'
    }
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
              <S.CanEditBlock>
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

                <S.DeleteButton onClick={deleteCurrentRecipe} >
                  <span>&#10006;</span>
                </S.DeleteButton>
              </S.CanEditBlock>
            }
          </S.IngredientsHeader>
          <S.List>
            {newIngredients.map((ingredient, index) => (
              editing ? (
                <S.ListItem key={index}>
                  <InputField type="text" value={ingredient} onChange={(e) => {
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
              <ActionButton onClick={() => setNewIngredients([...newIngredients, ""])}>
                Add Ingredient
              </ActionButton>

              <ActionButton onClick={saveRecipe}>
                Save Recipe
              </ActionButton>
            </S.ActionButtons>
          )}
        </S.Ingredients>
      </S.RecipeView >
    ) : (<div>loading...</div>)
  );
}
