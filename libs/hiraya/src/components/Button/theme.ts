const variants = {
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

const buttonSizesStyle = {
  small: {
    height: '32px',
    width: '88px',
  },
  medium: {
    height: '36px',
    width: '88px',
  },
  large: {
    height: '48px',
    width: '92px',
  },
};

const buttonWidthStyle = {
  default: '92px',
  isFullWidth: '100%',
  iconOnly: '48px',
};

export { variants, buttonSizesStyle, buttonWidthStyle };
