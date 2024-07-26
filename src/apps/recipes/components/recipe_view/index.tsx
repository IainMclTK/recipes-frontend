import { RecipeDetail } from "../../types/recipes";
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

  return (
    <S.RecipeView>
      ( props.recipe ? (
      <S.Info>
        <S.Title>{toTitleCase(props.recipe!.name)}</S.Title>
        <S.Author>{props.recipe!.author_id}</S.Author>
      </S.Info>
      ) : (
      <S.Title>Loading...</S.Title>
      )

    </S.RecipeView>
  );
}
