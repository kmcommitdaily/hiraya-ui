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
    backgroundColor: '#ff0000',
  }),
);

const AccordionSummaryStyled = styled(MUIAccordionSummary)(() => ({
  marginBottom: '20px',
}));

const TypographyStyled = styled(MUITypography)(() => ({
  marginRight: '10px',
}));

const AccordionDetailsStyled = styled(MUIAccordionDetails)(() => ({
  marginBottom: '20px',
}));

export {
  AccordionStyled,
  AccordionSummaryStyled,
  TypographyStyled,
  AccordionDetailsStyled,
};
