import { Meta, StoryObj } from '@storybook/react';
import StatisticCard from '../components/molecules/StatisticCard';

const meta: Meta<typeof StatisticCard> = {
  title: 'molecules/StatisticCard',
  component: StatisticCard,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    title: 'Brand Recognition',
    summary: `Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.`,
    iconPath: 'src/assets/icons/icon-brand-recognition.svg',
  },
  render: (args) => (
    <div
      style={{
        maxWidth: '1200px',
        padding: '40px',
      }}
    >
      <StatisticCard {...args} />
    </div>
  ),
};
