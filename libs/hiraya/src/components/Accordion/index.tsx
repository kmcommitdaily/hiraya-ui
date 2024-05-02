import { leadingVisual } from './theme';
import { AccordionStyled } from './style';

interface AccordionProps {
  leading?: keyof typeof leadingVisual;
  label?: string;
  isExpanded?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ label, leading, ...props }) => {
  return <AccordionStyled {...props}>{label}</AccordionStyled>;
};

export { Accordion, AccordionProps };
