import {
  Alert as MUIAlert,
  AlertProps as MUIAlertProps,
  styled,
} from '@mui/material';

import { CustomAlertColor } from './theme';

interface AlertProps extends Omit<MUIAlertProps, 'color'> {
  color?: CustomAlertColor;
  isFullWidth?: boolean;
  emphasis?: string;
  isDismissible?: boolean;
  showTitle?: boolean;
  title?: string;
  message?: string;
  showButton?: boolean;
  showLink?: boolean;
}

const AlertStyled = styled(MUIAlert)<AlertProps>(({ theme, color }) => ({
  '&.MuiAlert-root': {
    backgroundColor: color ? theme.palette[color]?.main : undefined,
  },
}));

export { AlertStyled, AlertProps };
