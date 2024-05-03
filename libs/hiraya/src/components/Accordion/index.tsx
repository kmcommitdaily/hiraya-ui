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

// const leadingMap = leadingVisual.number.map((x) => x + 1);

const data = dataJson.accordionData;

const Accordion: React.FC<AccordionProps> = ({ leading, ...props }) => {
  return (
    <>
      {data.map((item, index) => (
        <MUIAccordion {...props} key={index}>
          <MUIAccordionSummary expandIcon={<ExpandMoreIcon />}>
            {leading === 'number' && <MUITypography>{index + 1}</MUITypography>}
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

// const numberLead = leadingVisual.number;

// const Accordion: React.FC<AccordionProps> = ({ leading, ...props }) => {
//   return (
//     <>
//       {numberLead.map((num, index) => (
//         <AccordionDetails key={index}  />
//       ))}
//     </>
//   );
// };

export { Accordion };
