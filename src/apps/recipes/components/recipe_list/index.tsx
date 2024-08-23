import * as S from "./styles"
import { Recipe } from "../../types/recipes"
import { RecipeListItem } from "../recipe_list_item"

export interface Props {
  recipes: Recipe[];
}

export const RecipeList = (props: Props) => {
  return (
    <S.CardList>
      {
        props.recipes.map((recipe: Recipe) => (
          <RecipeListItem
            key={recipe.id}
            recipe={recipe}
          />
        ))
      }
    </S.CardList>
  );
}
