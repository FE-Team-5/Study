import { Meta, StoryObj } from '@storybook/react';
import RoundFillButton from './RoundFillButton';

const meta: Meta<typeof RoundFillButton> = {
  title: 'RoundFillButton',
  component: RoundFillButton,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const MediumButton: Story = {
  args: {
    size: 'medium',
    children: 'Get Started',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <RoundFillButton {...args} />
    </div>
  ),
};

export const SmallButton: Story = {
  args: {
    size: 'small',
    children: 'Sign Up',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <RoundFillButton {...args} />
    </div>
  ),
};
