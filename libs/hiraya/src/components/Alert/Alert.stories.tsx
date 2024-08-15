import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './index';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'Alert',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Demo: Story = {
  args: {
    color: 'notice',
    severity: 'info',
    title: 'this is a sample alert',
    emphasis: 'subtle',
    isDismissible: true,
    isFullWidth: false,
    showButton: true,
    showTitle: true,
    message:
      'hola! this is a sample alert message hola! this is a sample alert message hola! ',
  },
};
