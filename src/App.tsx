import React from 'react';
import './App.css';

import { Recipe } from "./apps/recipes/types/recipes";
import { RecipeList } from "./apps/recipes/components/recipe_list/recipe_list";
import { RecipeView } from "./apps/recipes/components/recipe_view/recipe_view";


function App() {
  // Get recipes from the api
  const recipes: Recipe[] = [

    {
      "id": "aa74b91a-8c57-4c66-82ff-008a42e2c410",
      "name": "Chicken Soup",
      "author_id": "123e4567-e89b-12d3-a456-426614174003"
    },
    {
      "id": "efa8747c-a7ea-4a94-8335-a53fb89f010b",
      "name": "Chicken Soup",
      "author_id": "123e4567-e89b-12d3-a456-426614174003"
    },
    {
      "id": "478aee7c-6f2e-4f89-959c-928df23eeec7",
      "name": "Chicken Soup",
      "author_id": "123e4567-e89b-12d3-a456-426614174003"
    },
    {
      "id": "40a35748-cb5f-4a10-bf87-e766d6d855c9",
      "name": "Chicken Soup",
      "author_id": "0c5fcd6a-5a24-4960-b16d-715b3c85e0a9"
    }
  ];

  const recipe = {
    "id": "e1d67f3a-dae7-4f8c-a465-3fdc082f6bb4",
    "name": "updated",
    "ingredients": [
      {
        "id": "2d6ca8b9-6ce6-4b06-9862-c5dc9172fae8",
        "name": "Salt"
      },
      {
        "id": "d4afc563-5744-4be1-beda-0adb3ab5b33f",
        "name": "cats"
      }
    ],
    "author_id": "b85acff6-b07d-4cdc-93c8-3eb9f44bb2cb",
    "author_name": "iain"
  };
  return (
    <div className="App">
      <h2>{process.env.REACT_APP_TEST_VAR}</h2>
      <button >Get Recipes</button>
      <RecipeList
        recipes={recipes}
      />
      <RecipeView recipe={recipe} />
    </div>
  );
}

export default App;
