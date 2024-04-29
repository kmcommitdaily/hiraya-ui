import { ButtonProps, ButtonStyled } from './style';

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <ButtonStyled
      variants={props.variants}
      buttonHeightSizes={props.buttonHeightSizes}
      buttonWidthSizes={props.buttonWidthSizes}
    >
      {props.buttonWidthSizes === 'iconOnly' ? props.buttonIcon : props.label}
    </ButtonStyled>
  );
};

export { Button };
