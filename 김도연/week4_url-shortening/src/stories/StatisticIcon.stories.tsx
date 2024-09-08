import { Meta, StoryObj } from '@storybook/react';
import StatisticIcon from '../components/atoms/StatisticIcon';

const meta: Meta<typeof StatisticIcon> = {
  title: 'atoms/StatisticIcon',
  component: StatisticIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    path: 'src/assets/icons/icon-brand-recognition.svg',
    alt: 'brand recognition',
  },
  render: (args) => (
    <>
      <StatisticIcon {...args} />
    </>
  ),
};
