import { Button as MUIButton, styled } from '@mui/material';

import { variantStyle, buttonHeightStyle } from './theme';

interface ButtonProps {
  label?: string;
  variants?: keyof typeof variantStyle;
  buttonHeightSizes?: keyof typeof buttonHeightStyle;
  isFullWidth?: boolean;
}

const ButtonStyled = styled(MUIButton)<ButtonProps>(
  ({ variants, buttonHeightSizes, isFullWidth }) => ({
    backgroundColor: variantStyle[variants || 'primary'].background,
    color: variantStyle[variants || 'primary'].text,
    padding: '0',
    '&.MuiButtonBase-root': {
      width: isFullWidth ? '112px' : '92px',
    },
    '&.MuiButton-root': {
      height: buttonHeightStyle[buttonHeightSizes || 'large'],
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
