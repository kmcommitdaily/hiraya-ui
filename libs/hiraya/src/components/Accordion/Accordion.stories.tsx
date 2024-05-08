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
    data: [
      {
        header: 'Header A',
        content:
          ' Lorem ipsum dolor stit amy, malesuada lacus ex, sit amet blandit leo lobortis eget.',
      },
      {
        header: 'Header B',
        content:
          ' Lorem ipsum dolor stit amy, malesuada lacus ex, sit amet blandit leo lobortis eget.',
      },
      {
        header: 'Header C',
        content:
          ' Lorem ipsum dolor stit amy, malesuada lacus ex, sit amet blandit leo lobortis eget.',
      },
    ],
  },
};
