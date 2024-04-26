import { ButtonProps, ButtonStyled } from './style';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  if (props.buttonWidthSizes === 'iconOnly') {
    return (
      <ButtonStyled
        variants={props.variants}
        buttonHeightSizes={props.buttonHeightSizes}
        buttonWidthSizes={props.buttonWidthSizes}
      >
        <FileDownloadIcon />
      </ButtonStyled>
    );
  }
  return (
    <ButtonStyled
      variants={props.variants}
      buttonHeightSizes={props.buttonHeightSizes}
      buttonWidthSizes={props.buttonWidthSizes}
    >
      {props.label}
    </ButtonStyled>
  );
};

export { Button };
