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
    backgroundColor: variantStyle[variants || 'primary'].background,
    color: variantStyle[variants || 'primary'].text,
    padding: '0',

    '&.MuiButton-root': {
      minWidth: icon
        ? buttonSizeStyle[buttonSizes || 'large']
        : isFullWidth
        ? '112px'
        : '92px',
      height: buttonSizeStyle[buttonSizes || 'large'],
    },

    borderRadius: '5px',
    border: variantStyle[variants || 'primary'].border,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: variantStyle[variants || 'primary'].hoverBackground,
    },
  }),
);

export { ButtonStyled, ButtonProps };
