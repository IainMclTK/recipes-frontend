import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getUserState } from '../../../users/services/user_service';
import * as S from './styles';
import * as D from '../../components/recipe_view/styles';

import { ActionButton, InputField } from '../../../../shared/components';
import { UpdateRecipe, IngredientDTO } from '../../types/recipes';
import { createRecipe } from '../../services/recipe_service';

export const NewRecipe = () => {
  const history = useHistory();

  useEffect(() => {
    // If the user is not logged in, redirect to the login page
    // TODO: Send a notification to the user saying that they need to be logged in. Maybe as a banner?
    if (!getUserState()) {
      history.push('/');
    }
  }, [history]);

  const [title, setTitle] = useState<string>('');
  const [newIngredients, setNewIngredients] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || newIngredients.length === 0) {
      // Set error state
      return;
    }

    const recipe: UpdateRecipe = {
      name: title,
      ingredients: newIngredients.map(ingredient => ({ name: ingredient })) as IngredientDTO[],
      author_id: getUserState()!.id,
      author_name: getUserState()!.name,
    };

    const newRecipe = await createRecipe(recipe);
    if (newRecipe) {
      history.push(`/recipes/${newRecipe.id}`);
    } else {
      // Set error state
    }
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <h1>New Recipe</h1>
      <h3>Name</h3>
      <InputField
        type="text"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
      />
      <D.IngredientsHeader>
        <D.Title>Ingredients</D.Title>
      </D.IngredientsHeader>
      <D.List>
        {newIngredients.map((ingredient, index) => (
          <D.ListItem key={index}>
            <InputField type="text" value={ingredient} onChange={(e) => {
              const newIncredientsCopy = [...newIngredients];
              newIncredientsCopy[index] = e.target.value;
              setNewIngredients(newIncredientsCopy);
            }} />
            <D.DeleteButton onClick={() => setNewIngredients(newIngredients.filter((_, i) => i !== index))} >
              <span>&#10006;</span>
            </D.DeleteButton>
          </D.ListItem>
        ))}
      </D.List>
      <D.ActionButtons>
        <ActionButton onClick={() => setNewIngredients([...newIngredients, ""])} type="button">
          Add Ingredient
        </ActionButton>

      </D.ActionButtons>
      <ActionButton type="submit">Create Recipe</ActionButton>
    </S.Form >

  )
}
