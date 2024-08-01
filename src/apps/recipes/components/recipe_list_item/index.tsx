import * as S from './styles';
import { Recipe } from '../../types/recipes';
import { useHistory } from 'react-router-dom';

import { ActionButton } from '../../../../shared/components'

export interface Props {
  recipe: Recipe;
}

export const RecipeListItem = (props: Props) => {
  const history = useHistory();

  const goToRecipe = () => {
    history.push(`/recipes/${props.recipe.id}`);
  }

  return (
    <S.RecipeCard>
      <S.Title>{props.recipe.name}</S.Title>
      <ActionButton onClick={goToRecipe}>View Recipe</ActionButton>
    </S.RecipeCard>
  );
}
