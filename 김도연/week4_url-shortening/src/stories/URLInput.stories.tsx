import { Meta, StoryObj } from '@storybook/react';
import URLInput from '../components/atoms/URLInput';

const meta: Meta<typeof URLInput> = {
  title: 'atoms/URLInput',
  component: URLInput,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    validationError: false,
  },
  render: (args) => (
    <div style={{ backgroundColor: 'var(--secondary)', padding: '40px' }}>
      <URLInput {...args} />
    </div>
  ),
};

export const ErrorInput: Story = {
  args: {
    validationError: true,
  },
  render: (args) => (
    <div style={{ backgroundColor: 'var(--secondary)', padding: '40px' }}>
      <URLInput {...args} />
    </div>
  ),
};
