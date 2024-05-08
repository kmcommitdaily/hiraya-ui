import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { leadingVisual } from './theme';
import {
  AccordionStyled,
  AccordionSummaryStyled,
  TypographyStyled,
  AccordionDetailsStyled,
} from './style';
interface AccordionProps {
  leading?: keyof typeof leadingVisual | number;
  data: {
    header: string;
    content: string;
  }[];
}

// {
//   <ExpandMoreIcon />;
// }
const Accordion: React.FC<AccordionProps> = ({ leading, data, ...props }) => {
  return (
    <>
      {data.map((item, index) => (
        <AccordionStyled {...props} data={data} key={index}>
          <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
            <TypographyStyled>
              {leading === 'number'
                ? leadingVisual.number(index)
                : leadingVisual.icon}
            </TypographyStyled>
            <br />
            <TypographyStyled>{item.header}</TypographyStyled>
          </AccordionSummaryStyled>
          <AccordionDetailsStyled>
            <TypographyStyled>{item.content}</TypographyStyled>
          </AccordionDetailsStyled>
        </AccordionStyled>
      ))}
    </>
  );
};

export { Accordion, AccordionProps };
