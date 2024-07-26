
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from '../styles';

export const NewUser = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const createUser = () => {
    // Login logic
  };

  return (
    <S.LoginView>
      <S.Title>Create User</S.Title>
      <div>Already have an account? <Link to={`/`}>Sign in here</Link></div>
      <h3>Email</h3>
      <S.Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <h3>Name</h3>
      <S.Input
        type="password"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <S.Button onClick={createUser}>Register</S.Button>
    </S.LoginView>
  );
}
