import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './index';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Accordion',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Demo: Story = {
  args: {
    leading: 'icon',
  },
};
