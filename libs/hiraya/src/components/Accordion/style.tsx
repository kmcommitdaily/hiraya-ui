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
        marginTop: '10px',
      },

      // position: 'absolute',
      // left: 0,
      // bottom: '-1px',
      // right: 0,
      // height: '1px',
      // content: "''",
      // opacity: 1,
      // backgroundColor: 'rgba(0, 0, 0, 0.12)',
    },
  }),
);

// icon = <ExpandMoreIcon />;

const AccordionSummaryStyled = styled(MUIAccordionSummary)(() => ({}));

const TypographyStyled = styled(MUITypography)(() => ({
  marginRight: '10px',
}));

const AccordionDetailsStyled = styled(MUIAccordionDetails)(() => ({}));

export {
  AccordionStyled,
  AccordionSummaryStyled,
  TypographyStyled,
  AccordionDetailsStyled,
};
