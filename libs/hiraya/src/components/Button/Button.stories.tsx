import type { Meta, StoryObj } from '@storybook/react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button } from './index';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Demo: Story = {
  args: {
    label: 'Button',
    variants: 'primary',
    buttonSizes: 'small',
    isFullWidth: true,
  },
};

export const IconButton: Story = {
  args: {
    variants: 'primary',
    buttonSizes: 'small',
    isFullWidth: false,
    icon: <FileDownloadIcon fontSize="small" />,
  },
};
