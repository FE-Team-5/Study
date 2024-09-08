import { Meta, StoryObj } from '@storybook/react';
import StatisticsList from '../components/organisms/StatisticsList';

const meta: Meta<typeof StatisticsList> = {
  title: 'organisms/StatisticsList',
  component: StatisticsList,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const List: Story = {
  render: () => (
    <div
      style={{
        maxWidth: '1200px',
        padding: '40px',
      }}
    >
      <StatisticsList />
    </div>
  ),
};
