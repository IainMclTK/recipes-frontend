import * as S from './styles';

export const InputField = (props: { type: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <S.Input
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
