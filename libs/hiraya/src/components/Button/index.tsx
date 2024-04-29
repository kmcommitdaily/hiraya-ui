import { ButtonProps, ButtonStyled } from './style';
import { buttonIconOnly } from './theme';

const Button: React.FC<ButtonProps> = ({
  buttonWidthSizes,
  label,
  ...props
}) => {
  const renderContent = () => {
    if (buttonWidthSizes === 'iconOnly') {
      return buttonIconOnly();
    } else {
      return label;
    }
  };

  return (
    <ButtonStyled
      variants={props.variants}
      buttonHeightSizes={props.buttonHeightSizes}
      buttonWidthSizes={buttonWidthSizes}
    >
      {renderContent()}
    </ButtonStyled>
  );
};

export { Button };
