import { Meta, StoryObj } from '@storybook/react';
import HeroSection from '../components/organisms/HeroSection';

const meta: Meta<typeof HeroSection> = {
  title: 'organisms/HeroSection',
  component: HeroSection,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SampleHeader: Story = {
  render: () => (
    <>
      <HeroSection />
    </>
  ),
};
