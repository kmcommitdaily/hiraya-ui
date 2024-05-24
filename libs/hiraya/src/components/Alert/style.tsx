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
  ({ theme, color, emphasis }) => ({
    '&.MuiAlert-root': {
      backgroundColor:
        color && emphasis === 'subtle'
          ? theme.palette[color]?.secondary
          : theme.palette[color ?? 'info']?.main,
    },
    '&.MuiAlert-message': {
      height: '100px',
    },
  }),
);

export { AlertStyled, AlertProps, AlertTitleStyled };
