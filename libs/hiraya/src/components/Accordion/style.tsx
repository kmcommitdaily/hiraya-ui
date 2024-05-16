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
        background: 'rgba(0, 0, 0, 0.323)',
        marginTop: '0',
        marginBottom: '5px',
      },
    },
  }),
);

const AccordionSummaryStyled = styled(MUIAccordionSummary)(() => ({
  '&.MuiAccordionSummary-root': {
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
  },

  '&.MuiAccordionSummary-content': {
    alignItems: 'center',
  },
}));

const TypographyStyled = styled(MUITypography)(() => ({
  '&.MuiTypography-root': {
    margin: '5px 0',
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
