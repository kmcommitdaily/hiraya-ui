import {
  Accordion as MUIAccordion,
  AccordionSummary as MUIAccordionSummary,
  AccordionDetails as MUIAccordionDetails,
} from '@mui/material';

const Accordion = () => {
  return (
    <MUIAccordion>
      <MUIAccordionSummary>Header</MUIAccordionSummary>
      <MUIAccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </MUIAccordionDetails>
    </MUIAccordion>
  );
};

export { Accordion };
