import { Meta, StoryObj } from '@storybook/react';
import StatisticsSection from '../components/organisms/StatisticsSection';

const meta: Meta<typeof StatisticsSection> = {
  title: 'organisms/StatisticsSection',
  component: StatisticsSection,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Section: Story = {
  render: () => (
    <>
      <StatisticsSection />
    </>
  ),
};
