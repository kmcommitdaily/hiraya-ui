import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index';

//👇 This default export determines where your story goes in the story list

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
    variantStyle: 'primary',
  },
};

export const Primary: Story = {
  args: {
    buttonWidthSizes: 'isFullWidth',
    // {
    //   isFullWidth: '',
    //   iconOnly: '',
    // },
    // color: '',
  },
};
