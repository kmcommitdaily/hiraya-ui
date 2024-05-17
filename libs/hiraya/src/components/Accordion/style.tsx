// MuiTypography - body1;

import {
  Accordion as MUIAccordion,
  AccordionSummary as MUIAccordionSummary,
  AccordionDetails as MUIAccordionDetails,
  Typography as MUITypography,
  styled,
} from '@mui/material';

import { AccordionProps } from '../Accordion/index';
import { defaultState, defaultStyle } from './theme';

const AccordionStyled = styled(MUIAccordion)<AccordionProps>(
  ({ ...props }) => ({
    '&.MuiAccordion-root': {
      ...defaultStyle,
    },
  }),
);

const AccordionSummaryStyled = styled(MUIAccordionSummary)(() => ({
  '&.MuiAccordionSummary-root': {
    ...defaultState,
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
