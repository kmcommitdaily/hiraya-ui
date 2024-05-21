import { AlertStyled, AlertProps } from './style';

const Alert: React.FC<AlertProps> = ({ ...props }) => {
  return <AlertStyled {...props}>This is an Alert</AlertStyled>;
};

export { Alert };
