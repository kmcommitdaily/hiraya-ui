// MuiTypography - body1;

import {
  Accordion as MUIAccordion,
  AccordionSummary as MUIAccordionSummary,
  AccordionDetails as MUIAccordionDetails,
  Typography as MUITypography,
  styled,
} from '@mui/material';

import { AccordionProps } from '../Accordion/index';

const AccordionStyled = styled(MUIAccordion)<AccordionProps>(
  ({ ...props }) => ({
    boxShadow: 'none',
    '&.MuiAccordion-root': {
      '&::before': {
        display: 'none',
      },
      '&::after': {
        content: "''",
        display: 'block',
        width: '100%',
        height: '1px',
        background: 'rgba(0, 0, 0, 0.12)', // Adjust the color as needed
        marginTop: '0',
      },
    },
  }),
);

const AccordionSummaryStyled = styled(MUIAccordionSummary)(() => ({
  '&.MuiAccordionSummary-root': {
    '&:hover': {
      backgroundColor: '#e0e7efc8',
    },
    '&:focus': {
      boxShadow: '0 0 10px 3px #90A5BB',
      backgroundColor: '#e0e7efc8',
      borderRadius: '5px',
    },
  },
  '&.MuiAccordionSummary-content': {
    alignItems: 'center',
  },
}));

const TypographyStyled = styled(MUITypography)(() => ({
  '&.MuiTypography-root': {
    marginRight: '5px',
  },
}));

const AccordionDetailsStyled = styled(MUIAccordionDetails)(() => ({
  padding: '16px',
}));

export {
  AccordionStyled,
  AccordionSummaryStyled,
  TypographyStyled,
  AccordionDetailsStyled,
};
