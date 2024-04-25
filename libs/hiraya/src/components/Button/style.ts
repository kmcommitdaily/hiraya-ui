import { Button as MUIButton, styled } from '@mui/material';

import { variants, buttonSizesStyle, buttonWidthStyle } from './theme';

interface ButtonProps {
  label?: string;
  variantStyle?: 'primary' | 'secondary' | 'tertiary';
  buttonSizes?: 'small' | 'medium' | 'large';
  buttonWidthSizes?: 'isFullWidth' | 'iconOnly' | 'default';
}

const ButtonStyled = styled(MUIButton)<ButtonProps>(
  ({ variantStyle, buttonSizes, buttonWidthSizes }) => ({
    backgroundColor: variants[variantStyle || 'primary'].background,
    color: variants[variantStyle || 'primary'].text,
    padding: '10px 20px',
    '&:height': buttonSizesStyle[buttonSizes || 'small'].height,
    '&:width': buttonWidthStyle[buttonWidthSizes || 'default'],
    borderRadius: '5px',
    border: variants[variantStyle || 'primary'].border,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: variants[variantStyle || 'primary'].hoverBackground,
    },
  }),
);

export { ButtonStyled, ButtonProps };
