import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from 'react-router-dom';

//import { Home } from './pages/home';
import { Recipes } from './apps/recipes/pages/list';
import { RecipeDetail } from './apps/recipes/pages/detail';
import { Login } from './apps/home/pages/login';
import { NewUser } from './apps/home/pages/new_user';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/new_user" exact>
          <NewUser />
        </Route>
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
