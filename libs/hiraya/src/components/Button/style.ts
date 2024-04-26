import { Button as MUIButton, styled } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
import { variantStyle, buttonHeightStyle, buttonWidthStyle } from './theme';

interface ButtonProps {
  label?: string;
  variants?: keyof typeof variantStyle;
  buttonHeightSizes?: keyof typeof buttonHeightStyle;
  buttonWidthSizes?: keyof typeof buttonWidthStyle;
}

const ButtonStyled = styled(MUIButton)<ButtonProps>(
  ({ variants, buttonHeightSizes, buttonWidthSizes }) => ({
    backgroundColor: variantStyle[variants || 'primary'].background,
    color: variantStyle[variants || 'primary'].text,
    padding: '0',
    '&.MuiButtonBase-root': {
      width: buttonWidthStyle[buttonWidthSizes || 'default'],
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
