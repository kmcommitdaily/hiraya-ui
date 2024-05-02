import { Button as MUIButton, styled } from '@mui/material';

import {
  variantStyle,
  buttonSizeStyle,
  disabledState,
  focusStyle,
} from './theme';
import { ReactNode } from 'react';

interface ButtonProps {
  label?: string;
  variants?: keyof typeof variantStyle;
  buttonSizes?: keyof typeof buttonSizeStyle;
  isFullWidth?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
}

const ButtonStyled = styled(MUIButton)<ButtonProps>(
  ({ variants, buttonSizes, isFullWidth, icon, disabled }) => ({
    ...buttonSizeStyle[buttonSizes || 'large'],
    ...focusStyle,

    '&.MuiButton-root': {
      width: isFullWidth ? '100%' : buttonSizeStyle[buttonSizes || 'large'],
    },

    ...(disabled
      ? { ...disabledState }
      : { ...variantStyle[variants || 'primary'] }),

    borderRadius: '5px',

    cursor: 'pointer',
    transition: 'background-color 0.3s ease',

    '&:hover': {
      backgroundColor: variantStyle[variants || 'primary'].hoverBackground,
    },
  }),
);

export { ButtonStyled, ButtonProps };
