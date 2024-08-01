// TODO: Use styled nav item
import './App.css';
import { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  Link,
  useLocation
} from 'react-router-dom';

import { Recipes, RecipeDetail, NewRecipe } from './apps/recipes';
import { Login, NewUser } from './apps/users';
import { getUserState, deleteUserState } from './apps/users/services/user_service';

import * as S from './shared/styles';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();

  const checkLogin = () => {
    const user = getUserState();
    if (!user) {
      setLoggedIn(false);
      return;
    }
    setLoggedIn(true);
  }

  useEffect(() => {
    checkLogin();
  }, [location]);

  const logout = () => {
    deleteUserState();
    setLoggedIn(false);
  }

  return (
    <>
      <S.Header>
        <S.Title>Recipe App</S.Title>
        <S.Nav>
          {loggedIn && <p>{getUserState()!.name}</p>}
          <Link to="/recipes">Recipes</Link>
          <Link to="/recipes/new">New recipe</Link>
          {loggedIn && <Link to="/" onClick={logout}>Logout</Link>}
          {!loggedIn && <Link to="/">Login</Link>}
          {!loggedIn && <Link to="/new_user">New user</Link>}
        </S.Nav>
      </S.Header>
      <S.Main>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/new_user" exact>
            <NewUser />
          </Route>
          <Route path="/recipes/new">
            <NewRecipe />
          </Route>
          <Route path="/recipes/:id">
            <RecipeDetail />
          </Route>
          <Route path="/recipes">
            <Recipes />
          </Route>
        </Switch>
      </S.Main>
    </>
  );
}

export default App;
