import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from 'react-router-dom';

//import { Home } from './pages/home';
import { Recipes } from './apps/recipes/pages/list';
import { RecipeDetail } from './apps/recipes/pages/detail';

function App() {
  return (
    <>
      <Switch>
        <Route path="/recipes/:id">
          <RecipeDetail />
        </Route>
        <Route path="/recipes">
          <Recipes />
        </Route>
      </Switch>
    </>
  );
}

export default App;
