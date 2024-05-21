import {
  Alert as MUIAlert,
  AlertProps as MUIAlertProps,
  styled,
} from '@mui/material';

interface AlertProps extends MUIAlertProps {
  isFullWidth?: boolean;
  emphasis?: string;
}

const AlertStyled = styled(MUIAlert)<AlertProps>(({ isFullWidth }) => ({
  '&.MuiAlert-root': {
    backgroundColor: isFullWidth ? 'blue' : 'red',
  },
}));

export { AlertStyled, AlertProps };
