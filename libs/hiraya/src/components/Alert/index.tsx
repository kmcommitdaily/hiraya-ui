import { Alert as MUIAlert, AlertProps as MUIAlertProps } from '@mui/material';

interface AlertProps extends MUIAlertProps {
  isFullWidth: boolean;
}

const Alert: React.FC<AlertProps> = ({ isFullWidth }) => {
  return <MUIAlert>This is an Aler</MUIAlert>;
};

export { Alert };
