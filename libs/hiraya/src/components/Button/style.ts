import { Button as MUIButton, styled } from '@mui/material';

import { variantStyle, buttonSizeStyle } from './theme';
import { ReactNode } from 'react';

interface ButtonProps {
  label?: string;
  variants?: keyof typeof variantStyle;
  buttonSizes?: keyof typeof buttonSizeStyle;
  isFullWidth?: boolean;
  icon?: ReactNode;
  focus?: boolean;
}

const ButtonStyled = styled(MUIButton)<ButtonProps>(
  ({ variants, buttonSizes, isFullWidth, icon, focus }) => ({
    ...variantStyle[variants || 'primary'],
    ...buttonSizeStyle[buttonSizes || 'large'],
    '&.MuiButton-root': {
      width: isFullWidth ? '100%' : buttonSizeStyle[buttonSizes || 'large'],
    },

    borderRadius: '5px',

    cursor: 'pointer',
    transition: 'background-color 0.3s ease',

    '&:focus': {
      boxShadow: '0 0 10px 5px #a9b7ea',
      backgroundColor: variantStyle[variants || 'primary'].hoverBackground,
    },
    '&:hover': {
      backgroundColor: variantStyle[variants || 'primary'].hoverBackground,
    },
  }),
);

export { ButtonStyled, ButtonProps };
