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
  ({ variants = 'primary', buttonSizes, isFullWidth, icon, disabled }) => ({
    ...buttonSizeStyle[buttonSizes || 'large'],
    ...focusStyle(variants),

    '&.MuiButton-root': {
      minWidth: icon && '48px',
      width: isFullWidth ? '100%' : buttonSizeStyle[buttonSizes || 'large'],
    },

    ...(disabled
      ? { ...disabledState }
      : { ...variantStyle[variants || 'primary'] }),

    borderRadius: '5px',

    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }),
);

export { ButtonStyled, ButtonProps };
