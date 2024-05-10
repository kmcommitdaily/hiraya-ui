import { leadingItem } from './theme';
import {
  AccordionStyled,
  AccordionSummaryStyled,
  TypographyStyled,
  AccordionDetailsStyled,
} from './style';
import { ReactNode } from 'react';
interface AccordionProps {
  leading?: keyof typeof leadingItem | number;
  data: {
    header: string;
    content: string;
  }[];
  icon?: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({
  leading,
  data,
  icon,
  ...props
}) => {
  return (
    <>
      {data.map((item, index) => (
        <AccordionStyled {...props} data={data} key={index}>
          <AccordionSummaryStyled expandIcon={icon}>
            <TypographyStyled>
              {leading === 'number'
                ? leadingItem.number(index) + '.'
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
