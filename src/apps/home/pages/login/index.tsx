import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { getUser, saveUserState } from '../../../users/services/user_service';
import { User } from '../../../users/types';
import { InputField, ActionButton } from '../../../../shared/components';

import * as S from '../styles';

export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const history = useHistory();

  const validateEmail = (email: string): boolean => {
    // This is a very basic email validation
    // A more robust solution would be to use a library like https://www.npmjs.com/package/validator
    return email.includes('@') && email.includes('.');
  }

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      setError(true);
      return;
    }
    const user: User = await getUser(email);
    if (user && !user.id) {
      setError(true);
      return;
    }
    // Store the user in local storage
    // Doing this rather than cookie of redux for simplicity
    saveUserState(user);
    // Navigate to /recipes
    history.push(`/recipes`);
  };

  return (
    <S.LoginView>
      <S.Title>Login</S.Title>
      <div>Don't have an account? <Link to={`/new_user`}>Sign up here</Link></div>
      <h3>Email</h3>
      <InputField
        type="email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      {error && <S.Error>Email not found</S.Error>}
      <ActionButton onClick={handleLogin}>Login</ActionButton>
    </S.LoginView>
  );
}
