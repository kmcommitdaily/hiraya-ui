import { ThemeProvider } from '@emotion/react';
import { AlertStyled, AlertProps } from './style';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import { AlertTitleStyled } from './style';

const handleClose = () => {
  alert('Alert is closed!');
};

const Alert: React.FC<AlertProps> = ({
  color,
  title,
  emphasis,
  message,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AlertStyled
        {...props}
        color={color}
        emphasis={emphasis}
        onClose={handleClose}
      >
        <AlertTitleStyled> {title}</AlertTitleStyled>
        {message}
      </AlertStyled>
    </ThemeProvider>
  );
};

export { Alert };
