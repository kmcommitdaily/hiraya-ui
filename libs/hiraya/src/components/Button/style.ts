import { Button as MUIButton, styled } from '@mui/material';

import { variantStyle, buttonSizeStyle } from './theme';

interface ButtonProps {
  label?: string;
  variants?: keyof typeof variantStyle;
  buttonHeightSizes?: keyof typeof buttonSizeStyle;
  isFullWidth?: boolean;
  iconOnly?: boolean;
}

const ButtonStyled = styled(MUIButton)<ButtonProps>(
  ({ variants, buttonHeightSizes, isFullWidth, iconOnly }) => ({
    backgroundColor: variantStyle[variants || 'primary'].background,
    color: variantStyle[variants || 'primary'].text,
    padding: '0',

    '&.MuiButton-root': {
      minWidth: iconOnly
        ? buttonSizeStyle[buttonHeightSizes || 'large']
        : !isFullWidth
        ? '92px'
        : '112px',
      height: buttonSizeStyle[buttonHeightSizes || 'large'],
    },

    // '&.MuiButtonBase-root': {
    //   minwidth: '0 !important',
    // },

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
