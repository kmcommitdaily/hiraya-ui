import { ThemeProvider } from '@emotion/react';
import { AlertStyled, AlertProps } from './style';
import { CssBaseline } from '@mui/material';
import theme from './theme';

const Alert: React.FC<AlertProps> = ({ color, title, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AlertStyled {...props} color={color}>
        {title}
      </AlertStyled>
    </ThemeProvider>
  );
};

export { Alert };
