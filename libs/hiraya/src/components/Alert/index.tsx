import { ThemeProvider } from '@emotion/react';
import { AlertStyled, AlertProps } from './style';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import { AlertTitleStyled } from './style';
import { Button } from '../Button';

const handleClose = () => {
  alert('Alert is closed!');
};

const Alert: React.FC<AlertProps> = ({
  color,
  title,
  emphasis,
  message,
  showButton,
  showTitle,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AlertStyled
        {...props}
        color={color}
        emphasis={emphasis}
        onClose={showButton ? handleClose : undefined}
      >
        <AlertTitleStyled> {showTitle ? title : undefined}</AlertTitleStyled>
        {showTitle ? message : undefined}
        <Button
          label="Button"
          buttonSizes="small"
          variants="primary"
          isFullWidth={false}
        />
      </AlertStyled>
    </ThemeProvider>
  );
};

export { Alert };
