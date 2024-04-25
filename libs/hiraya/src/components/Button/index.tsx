import { ButtonProps, ButtonStyled } from './style';

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <ButtonStyled
      variantStyle={props.variantStyle}
      size={props.buttonSizes}
      buttonWidthSizes={props.buttonWidthSizes}
    >
      {props.label}
    </ButtonStyled>
  );
};

export { Button };

// #305EFF
// #46709F
