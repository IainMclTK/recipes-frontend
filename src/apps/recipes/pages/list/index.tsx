import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';
import { ActionButton } from '../../../../shared/components';

import { Recipe } from '../../types/recipes';
import { RecipeList } from '../../components/recipe_list';
import { getRecipes } from '../../services/recipe_service';

export const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const history = useHistory();

  const fetchRecipes = async () => {
    await getRecipes().then((rec) => {
      setRecipes(rec);
    }).catch((error) => {
      console.error(`Error fetching recipes: ${error}`);
      setRecipes([] as Recipe[])
    });
  }

  const createNewRecipe = () => {
    history.push(`/recipes/new`);
  }

  useEffect(() => {
    fetchRecipes()
  }, []);

  return (
    <div>
      <S.Title>Recipes</S.Title>
      <S.Centered>
        <ActionButton onClick={createNewRecipe}>New Recipe</ActionButton>
      </S.Centered>
      <S.Centered>
        <RecipeList recipes={recipes} />
      </S.Centered>
    </div>
  );
}

