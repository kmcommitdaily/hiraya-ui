import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { ReactNode } from 'react';
const variantStyle = {
  primary: {
    background: '#305EFF',
    text: 'white',
    border: 'none',
    hoverBackground: '#2950DA',
  },
  secondary: {
    background: '#FFFFF',
    text: '#305EFF',
    border: '1px solid #305EFF',
    hoverBackground: '#9FA8DA',
  },
  tertiary: {
    background: '#BDBDBD',
    text: '#333333',
    border: 'none',
    hoverBackground: '#9E9E9E',
  },
};

const buttonHeightStyle = {
  small: '32px !important',
  medium: '36px  !important',
  large: '48px  !important',
};

const buttonWidthStyle = {
  default: '92px',
  isFullWidth: '112px',
  iconOnly: '48px',
};

const buttonIconOnly = (): ReactNode => {
  return <FileDownloadIcon />;
};

export { variantStyle, buttonHeightStyle, buttonWidthStyle, buttonIconOnly };
