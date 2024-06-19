import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Alert } from './index';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme';

const withThemeProvider = (Story: StoryFn) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'Alert',
  tags: ['autodocs'],
  decorators: [withThemeProvider],
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
