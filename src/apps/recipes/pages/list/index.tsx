import React from 'react';

import { useState, useEffect } from 'react';

import { Recipe } from '../../types/recipes';
import { RecipeList } from '../../components/recipe_list';
import { getRecipes } from '../../services/recipe_service';

export const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const fetchRecipes = async () => {
    await getRecipes().then((rec) => {
      setRecipes(rec);
    }).catch((error) => {
      console.error(`Error fetching recipes: ${error}`);
      setRecipes([] as Recipe[])
    });
  }

  useEffect(() => {
    fetchRecipes()
  }, []);

  return (
    <div>
      <h2>{process.env.REACT_APP_TEST_VAR}</h2>
      <button >Get Recipes</button>
      <div>
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
}

