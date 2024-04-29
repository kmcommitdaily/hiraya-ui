import { ButtonProps, ButtonStyled } from './style';

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <ButtonStyled
      variants={props.variants}
      buttonHeightSizes={props.buttonHeightSizes}
      isFullWidth={props.isFullWidth}
    >
      {label}
    </ButtonStyled>
  );
};

export { Button };
