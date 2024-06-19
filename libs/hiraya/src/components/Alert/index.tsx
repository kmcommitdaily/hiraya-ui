import { AlertStyled, AlertProps } from './style';
import { Typography } from '@mui/material';
import { AlertTitleStyled } from './style';
import { Button } from '../Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const handleClick = () => {
  alert('Alert is Closed');
};

const Alert: React.FC<AlertProps> = ({
  color,
  title,
  emphasis,
  message,
  showButton,
  showTitle,
  isDismissible,
  ...props
}) => {
  return (
    <AlertStyled
      {...props}
      color={color}
      emphasis={emphasis}
      action={
        isDismissible && (
          <IconButton aria-label="close" size="small" onClick={handleClick}>
            <CloseIcon />
          </IconButton>
        )
      }
    >
      <AlertTitleStyled> {showTitle && title}</AlertTitleStyled>
      <div className="alert-content">
        <Typography>{showTitle && message}</Typography>
        {showButton && (
          <Button
            label="Button"
            buttonSizes="small"
            variants="primary"
            isFullWidth={false}
          />
        )}
      </div>
    </AlertStyled>
  );
};

export { Alert };
