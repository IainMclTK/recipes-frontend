import { ReactNode } from 'react';
import * as S from './styles';

interface ActionButtonProps {
  onClick: () => any;
  children: ReactNode;
}

export const ActionButton = ({ onClick, children }: ActionButtonProps) => {
  return (
    <S.Button onClick={onClick}>{children}</S.Button>
  );
}
