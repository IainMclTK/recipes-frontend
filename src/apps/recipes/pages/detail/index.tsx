import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { RecipeView } from '../../components/recipe_view';
import { GUID, RecipeDetail as RecipeDetailType } from "../../types/recipes";
import { getRecipe } from "../../services/recipe_service";

import * as S from "./styles";

export const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = React.useState<RecipeDetailType | null>(null);

  useEffect(() => {
    getRecipe(id).then((rec) => {
      setRecipe(rec);
    });
  }, [id]);

  return (
    <S.RecipeDetail>
      <RecipeView recipe={recipe} />
    </S.RecipeDetail>
  );
}
