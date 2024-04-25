import { Button } from '@mui/material';

interface ButtonProps {
  label: string;
  variant?: 'text' | 'outlined' | 'contained';
}

const ButtonUsage: React.FC<ButtonProps> = ({ ...props }) => {
  return <Button variant={props.variant}>{props.label}</Button>;
};

export { ButtonUsage };
