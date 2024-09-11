import { Meta, StoryObj } from '@storybook/react';
import SocialLinkList from '../components/molecules/SocialLinkList';

const meta: Meta<typeof SocialLinkList> = {
  title: 'molecules/SocialLinkList',
  component: SocialLinkList,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Navigation: Story = {
  render: () => (
    <>
      <div
        style={{
          backgroundColor: 'var(--dark-900)',
          padding: '40px',
        }}
      >
        <SocialLinkList />
      </div>
    </>
  ),
};
