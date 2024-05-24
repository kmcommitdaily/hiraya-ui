import {
  Alert as MUIAlert,
  AlertProps as MUIAlertProps,
  styled,
} from '@mui/material';

import { CustomAlertColor } from './theme';

interface AlertProps extends Omit<MUIAlertProps, 'color'> {
  color: CustomAlertColor;
  isFullWidth?: boolean;
  emphasis: 'subtle' | 'intense';
  isDismissible?: boolean;
  showTitle?: boolean;
  title?: string;
  message?: string;
  showButton?: boolean;
  showLink?: boolean;
}

const AlertStyled = styled(MUIAlert)<AlertProps>(
  ({ theme, color, emphasis }) => ({
    '&.MuiAlert-root': {
      backgroundColor:
        color && emphasis === 'subtle'
          ? theme.palette[color]?.secondary
          : theme.palette[color]?.main,
    },
  }),
);

export { AlertStyled, AlertProps };
