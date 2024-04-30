import { Button as MUIButton, styled } from '@mui/material';

import { variantStyle, buttonSizeStyle } from './theme';
import { ReactNode } from 'react';

interface ButtonProps {
  label?: string;
  variants?: keyof typeof variantStyle;
  buttonSizes?: keyof typeof buttonSizeStyle;
  isFullWidth?: boolean;
  icon?: ReactNode;
}

const ButtonStyled = styled(MUIButton)<ButtonProps>(
  ({ variants, buttonSizes, isFullWidth, icon }) => ({
    ...variantStyle[variants || 'primary'],

    '&.MuiButton-root': {
      ...buttonSizeStyle[buttonSizes || 'large'],
    },

    borderRadius: '5px',

    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: variantStyle[variants || 'primary'].hoverBackground,
    },
  }),
);

export { ButtonStyled, ButtonProps };
