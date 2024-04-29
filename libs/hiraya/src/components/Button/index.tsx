import { ButtonProps, ButtonStyled } from './style';
import { buttonIconOnly } from './theme';

const Button: React.FC<ButtonProps> = ({ label, iconOnly, ...props }) => {
  const renderContent = () => {
    if (!iconOnly) {
      return label;
    }
    return buttonIconOnly();
  };

  return (
    <ButtonStyled
      variants={props.variants}
      buttonHeightSizes={props.buttonHeightSizes}
      isFullWidth={props.isFullWidth}
      iconOnly={iconOnly}
    >
      {renderContent()}
    </ButtonStyled>
  );
};

export { Button };
