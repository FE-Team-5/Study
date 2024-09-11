import { Meta, StoryObj } from '@storybook/react';
import ShortenLinkItem from '../components/molecules/ShortenLinkItem';

const meta: Meta<typeof ShortenLinkItem> = {
  title: 'molecules/ShortenLinkItem',
  component: ShortenLinkItem,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ShortenLink: Story = {
  args: {
    originLink: 'https://www.frontendmentor.io',
    shortenLink: 'https://rel.ink/k4IKyk',
  },
  render: (args) => (
    <>
      <ShortenLinkItem {...args} />
    </>
  ),
};
