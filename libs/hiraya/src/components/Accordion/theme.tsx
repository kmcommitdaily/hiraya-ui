import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const leadingItem = {
  number: (index: number) => index + 1,
  icon: <PermIdentityIcon />,
};

// const colorTheme = {
//   primary: {
//     background: '#305EFF',
//     color: 'white',
//     border: 'none',
//     '&:hover': {
//       background: '#e0e7efc8',
//     },
//     '&:after': {
//       background: 'rgba(0, 0, 0, 0.323)',
//     },
//     '&:focus': {
//       background: '#e0e7efc8',
//     },
//   },
// };

const defaultStyle = {
  boxShadow: 'none',
  '&::before': {
    display: 'none',
  },
  '&::after': {
    content: "''",
    display: 'block',
    width: '100%',
    height: '1px',
    background: 'rgba(0, 0, 0, 0.323)',
    marginTop: '0',
    marginBottom: '5px',
  },
};

const defaultState = {
  margin: 0,
  '&:hover': {
    backgroundColor: '#e0e7efc8',
  },
  '&:focus': {
    boxShadow: '0 0 5px 3px #9aaae4',
    backgroundColor: '#e0e7efc8',
    borderRadius: '5px',
    border: '1px solid white',
  },
};

export { leadingItem, defaultState, defaultStyle };
