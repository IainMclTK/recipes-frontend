import * as S from './styles';
import { Recipe } from '../../types/recipes';
import { Link } from 'react-router-dom';

export interface Props {
  recipe: Recipe;
}

export const RecipeListItem = (props: Props) => {
  return (
    <S.RecipeCard>
      <S.Title>{props.recipe.name}</S.Title>
      <Link to={`/recipes/${props.recipe.id}`}>
        <S.Button >View Recipe</S.Button>
      </Link>
    </S.RecipeCard>
  );
}
