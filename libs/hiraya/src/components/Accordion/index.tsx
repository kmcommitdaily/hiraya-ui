import {
  Accordion as MUIAccordion,
  AccordionSummary as MUIAccordionSummary,
  AccordionDetails as MUIAccordionDetails,
  Typography as MUITypography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { leadingVisual } from './theme';
import dataJson from '../Accordion/accordion.json';

interface AccordionProps {
  leading?: keyof typeof leadingVisual | number;
}

const data = dataJson.accordionData;

const Accordion: React.FC<AccordionProps> = ({ leading, ...props }) => {
  return (
    <>
      {data.map((item, index) => (
        <MUIAccordion {...props} key={index}>
          <MUIAccordionSummary expandIcon={<ExpandMoreIcon />}>
            {leading === 'number' ? (
              <MUITypography> {leadingVisual.number(index)}</MUITypography>
            ) : (
              <MUITypography> {leadingVisual.icon}</MUITypography>
            )}
            <MUITypography>{item.header}</MUITypography>
          </MUIAccordionSummary>
          <MUIAccordionDetails>
            <MUITypography>{item.content}</MUITypography>
          </MUIAccordionDetails>
        </MUIAccordion>
      ))}
    </>
  );
};

export { Accordion };
