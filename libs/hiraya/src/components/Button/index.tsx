import { ButtonProps, ButtonStyled } from './style';

const Button: React.FC<ButtonProps> = ({ label, icon, focus, ...props }) => {
  const renderContent = () => {
    return icon ? icon : label;
  };

  return (
    <ButtonStyled {...props} icon={icon}>
      {renderContent()}
    </ButtonStyled>
  );
};

export { Button };
