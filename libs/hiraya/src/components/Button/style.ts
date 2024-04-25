import { Button as MUIButton, styled } from '@mui/material';

import {
  backgroundStyle,
  textColorStyle,
  borderStyle,
  hoverBackgroundStyle,
} from './theme';

interface ButtonProps {
  label?: string;
  variantStyle?: 'primary' | 'secondary' | 'tertiary';
}

const ButtonStyled = styled(MUIButton)<ButtonProps>(({ variantStyle }) => ({
  backgroundColor: backgroundStyle[variantStyle || 'primary'], // Default color if no variantStyle is provided
  color: textColorStyle[variantStyle || 'primary'],
  padding: '10px 20px',
  height: '48px',
  width: '93px',
  borderRadius: '5px',
  border: borderStyle[variantStyle || 'primary'],
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: hoverBackgroundStyle[variantStyle || 'primary'],
  },
}));

export { ButtonStyled, ButtonProps };
