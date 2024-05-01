import { Button as MUIButton, styled } from '@mui/material';

import { variantStyle, buttonSizeStyle, disabledState } from './theme';
import { ReactNode } from 'react';

interface ButtonProps {
  label?: string;
  variants?: keyof typeof variantStyle;
  buttonSizes?: keyof typeof buttonSizeStyle;
  isFullWidth?: boolean;
  icon?: ReactNode;
  focus?: boolean;
  disabled?: boolean;
}

const ButtonStyled = styled(MUIButton)<ButtonProps>(
  ({ variants, buttonSizes, isFullWidth, icon, focus, disabled }) => ({
    ...buttonSizeStyle[buttonSizes || 'large'],

    '&.MuiButton-root': {
      width: isFullWidth ? '100%' : buttonSizeStyle[buttonSizes || 'large'],
    },

    ...(disabled
      ? { ...disabledState }
      : { ...variantStyle[variants || 'primary'] }),

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
