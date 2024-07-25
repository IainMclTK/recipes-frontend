import * as S from './styles';
import { Recipe } from '../../types/recipes';

export interface Props {
  recipe: Recipe;
}

export const RecipeListItem = (props: Props) => {
  const viewRecipeDetails = () => {
    // Navigate to the recipe details
    console.log(`Navigating to recipe details for ${props.recipe.name}: ${props.recipe.id}`)

  }
  return (
    <S.RecipeCard>
      <S.Title>{props.recipe.name}</S.Title>
      <S.Button onClick={viewRecipeDetails}>View Recipe</S.Button>
    </S.RecipeCard>
  );
}
