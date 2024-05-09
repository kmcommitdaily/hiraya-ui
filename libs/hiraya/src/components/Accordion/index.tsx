import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { leadingItem } from './theme';
import {
  AccordionStyled,
  AccordionSummaryStyled,
  TypographyStyled,
  AccordionDetailsStyled,
} from './style';
interface AccordionProps {
  leading?: keyof typeof leadingItem | number;
  data: {
    header: string;
    content: string;
  }[];
}

const Accordion: React.FC<AccordionProps> = ({ leading, data, ...props }) => {
  return (
    <>
      {data.map((item, index) => (
        <AccordionStyled {...props} data={data} key={index}>
          <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
            <TypographyStyled>
              {leading === 'number'
                ? leadingItem.number(index)
                : leadingItem.icon}
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
