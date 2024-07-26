import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from '../styles';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleLogin = () => {
    // Login logic
  };

  return (
    <S.LoginView>
      <S.Title>Login</S.Title>
      <div>Don't have an account? <Link to={`/new_user`}>Sign up here</Link></div>
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
      <S.Button onClick={handleLogin}>Login</S.Button>
    </S.LoginView>
  );
}
