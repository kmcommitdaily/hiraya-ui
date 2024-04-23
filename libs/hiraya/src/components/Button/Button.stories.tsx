import type { Meta, StoryObj } from '@storybook/react';

import { ButtonUsage } from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ButtonUsage> = {
  component: ButtonUsage,
  title: 'Button',
};

export default meta;
type Story = StoryObj<typeof ButtonUsage>;

export const Primary: Story = {
  args: {
    label: 'Click me',
    variant: 'contained',
  },
};
