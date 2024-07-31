
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { createUser, saveUserState } from '../../../users/services/user_service';
import { InputField, ActionButton } from '../../../../shared/components';

import * as S from '../styles';

export const NewUser = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  const history = useHistory();

  const createNewUser = async () => {
    if (!email || !name) {
      setError(true);
      return;
    }
    // Create user logic
    const user = { email, name, id: '' };
    const newUser = await createUser(user);
    if (!newUser) {
      setError(true);
      return;
    }
    saveUserState(newUser);
    history.push(`/recipes`);
  };

  return (
    <S.LoginView>
      <S.Title>Create User</S.Title>
      <div>Already have an account? <Link to={`/`}>Sign in here</Link></div>
      <h3>Email</h3>
      <InputField
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <h3>Name</h3>
      <InputField
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {error && <S.Error>Failed to create user</S.Error>}
      <ActionButton onClick={createNewUser}>Register</ActionButton>
    </S.LoginView>
  );
}
