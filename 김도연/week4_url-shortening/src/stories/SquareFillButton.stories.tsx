import { Meta, StoryObj } from '@storybook/react';
import SquareFillButton from '../components/atoms/SquareFillButton';

const meta: Meta<typeof SquareFillButton> = {
  title: 'atoms/SquareFillButton',
  component: SquareFillButton,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const MediumButton: Story = {
  args: {
    children: 'Shorten It!',
  },
  render: (args) => (
    <>
      <SquareFillButton {...args} />
    </>
  ),
};

export const SmallPrimaryButton: Story = {
  args: {
    size: 'small',
    children: 'Copy',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <SquareFillButton {...args} />
    </div>
  ),
};

export const SmallSecondaryButton: Story = {
  args: {
    primary: false,
    size: 'small',
    children: 'Copied!',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <SquareFillButton {...args} />
    </div>
  ),
};
