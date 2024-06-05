import {
  Alert as MUIAlert,
  AlertProps as MUIAlertProps,
  AlertTitle as MUIAlertTitle,
  styled,
} from '@mui/material';

import { CustomAlertColor } from './theme';

interface AlertProps extends Omit<MUIAlertProps, 'color'> {
  color?: CustomAlertColor;
  isFullWidth?: boolean;
  emphasis?: 'subtle' | 'intense';
  isDismissible?: boolean;
  showTitle?: boolean;
  title?: string;
  message?: string;
  showButton?: boolean;
  showLink?: boolean;
}

const AlertTitleStyled = styled(MUIAlertTitle)<AlertProps>(({ message }) => ({
  fontSize: 'auto',
}));

const AlertStyled = styled(MUIAlert)<AlertProps>(
  ({ theme, color, emphasis, isFullWidth, isDismissible, showTitle }) => ({
    '&.MuiAlert-root': {
      backgroundColor:
        color && emphasis === 'subtle'
          ? theme.palette[color]?.secondary
          : theme.palette[color ?? 'info']?.main,
      maxWidth: '500px',
    },
    '.alert-content ': {
      display: isFullWidth ? 'flex' : 'block',
      alignItems: isFullWidth ? 'start' : 'initial',
      justifyContent: isFullWidth ? 'space-between' : 'initial',
    },

    '.MuiButtonBase-root': {
      marginTop: isFullWidth ? '0' : '10px',
      display: isFullWidth ? 'inline-block' : 'block',
    },
    '.MuiIconButton-root': {
      top: isFullWidth ? '30px' : '-13px',
    },
    '.MuiAlert-action': {
      padding: !isDismissible && 0,
    },
  }),
);

export { AlertStyled, AlertProps, AlertTitleStyled };
