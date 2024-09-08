import { Meta, StoryObj } from '@storybook/react';
import URLInputForm from '../components/molecules/URLInputForm';

const meta: Meta<typeof URLInputForm> = {
  title: 'molecules/URLInputForm',
  component: URLInputForm,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InputForm: Story = {
  render: () => (
    <>
      <URLInputForm />
    </>
  ),
};
