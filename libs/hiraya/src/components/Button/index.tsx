import { Button as MUIButton, styled } from '@mui/material';

interface ButtonProps {
  label?: string;
  variantStyle?: 'primary' | 'secondary' | 'tertiary';
}

const ButtonStyled = styled(MUIButton)<ButtonProps>(({ variantStyle }) => ({
  backgroundColor:
    variantStyle === 'primary'
      ? '#305EFF'
      : variantStyle === 'secondary'
      ? '#FFFFF'
      : variantStyle === 'tertiary'
      ? '#BDBDBD '
      : '#305EFF', // Default color if no variantStyle is provided
  color:
    variantStyle === 'primary'
      ? 'white'
      : variantStyle === 'secondary'
      ? '#305EFF'
      : variantStyle === 'tertiary'
      ? '#333333'
      : '#FFFFF',
  padding: '10px 20px',
  height: '48px',
  width: '93px',
  borderRadius: '5px',
  border:
    variantStyle === 'primary' || variantStyle === 'tertiary'
      ? 'none'
      : variantStyle === 'secondary'
      ? '1px #305EFF solid '
      : 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor:
      variantStyle === 'primary'
        ? '#2950DA'
        : variantStyle === 'secondary'
        ? '#9FA8DA'
        : variantStyle === 'tertiary'
        ? '#9E9E9E'
        : '#2950DA', // Default hover color if no variantStyle is provided
  },
}));

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <ButtonStyled variantStyle={props.variantStyle}>{props.label}</ButtonStyled>
  );
};

export { Button };

// #305EFF
// #46709F
