import { ButtonProps, ButtonStyled } from './style';

const Button: React.FC<ButtonProps> = ({ ...props }) => {
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
