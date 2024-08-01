import { ReactNode } from 'react';
import * as S from './styles';

interface ActionButtonProps {
  onClick?: () => any;
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  //type: string;
}

export const ActionButton = ({ onClick, children, type }: ActionButtonProps) => {
  return (
    <S.Button onClick={onClick} type={type}>{children}</S.Button>
  );
}
