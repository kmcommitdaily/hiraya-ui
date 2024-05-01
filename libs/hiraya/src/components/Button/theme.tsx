const variantStyle = {
  primary: {
    background: '#305EFF',
    color: 'white',
    border: 'none',
    hoverBackground: '#2950DA',
  },
  secondary: {
    background: '#FFFFF',
    color: '#305EFF',

    border: '1px solid #305EFF',
    hoverBackground: '#b4bdec',
  },
  tertiary: {
    background: '#BDBDBD',
    color: '#333333',
    border: 'none',
    hoverBackground: '#9E9E9E',
  },
};

const disabledState = {
  background: '#E0E0E0',
  color: '#93a8f1',
  border: 'none',
};

const buttonSizeStyle = {
  small: {
    padding: '6px 4px',
    fontSize: '10px',
  },
  medium: {
    padding: '8px 10px',
    fontSize: '16px',
  },
  large: {
    padding: '10px 16px',
    fontSize: '20px',
  },
};

export { variantStyle, buttonSizeStyle, disabledState };
