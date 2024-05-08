import {
  Accordion as MUIAccordion,
  AccordionSummary as MUIAccordionSummary,
  AccordionDetails as MUIAccordionDetails,
  Typography as MUITypography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { leadingVisual } from './theme';

interface AccordionProps {
  leading?: keyof typeof leadingVisual | number;
  data: {
    header: string;
    content: string;
  }[];
}

const Accordion: React.FC<AccordionProps> = ({ leading, data, ...props }) => {
  return (
    <>
      {data.map((item, index) => (
        <MUIAccordion {...props} key={index}>
          <MUIAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <MUITypography>
              {leading === 'number'
                ? leadingVisual.number(index)
                : leadingVisual.icon}
            </MUITypography>

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
