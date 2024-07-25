import { Recipe } from "../../types/recipes";
import * as S from "./styles";

export interface Props {
  recipe: Recipe
}

export const RecipeView = (props: Props) => {
  return (
    <S.RecipeView>RecipeView</S.RecipeView>
  );
}
