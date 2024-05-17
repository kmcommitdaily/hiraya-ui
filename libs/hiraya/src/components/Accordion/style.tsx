// MuiTypography - body1;

import {
  Accordion as MUIAccordion,
  AccordionSummary as MUIAccordionSummary,
  AccordionDetails as MUIAccordionDetails,
  Typography as MUITypography,
  styled,
} from '@mui/material';

import { AccordionProps } from '../Accordion/index';
import { primaryBg, secondaryBg } from './theme';

const AccordionStyled = styled(MUIAccordion)<AccordionProps>(
  ({ ...props }) => ({
    '&.MuiAccordion-root': {
      boxShadow: 'none',
      '&::before': {
        display: 'none',
      },
      '&::after': {
        content: "''",
        display: 'block',
        width: '100%',
        height: '1px',
        background: primaryBg,
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
      backgroundColor: secondaryBg,
    },
    '&:focus': {
      boxShadow: '0 0 5px 3px #9aaae4',
      backgroundColor: secondaryBg,
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
