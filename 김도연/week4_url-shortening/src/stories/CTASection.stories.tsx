import { Meta, StoryObj } from '@storybook/react';
import CTASection from '../components/organisms/CTASection';

const meta: Meta<typeof CTASection> = {
  title: 'organisms/CTASection',
  component: CTASection,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Section: Story = {
  render: () => (
    <>
      <CTASection />
    </>
  ),
};
