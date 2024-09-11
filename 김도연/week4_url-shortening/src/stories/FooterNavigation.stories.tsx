import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterNavigation from '../components/molecules/FooterNavigation';
import App from '../App';

const meta: Meta<typeof FooterNavigation> = {
  title: 'molecules/FooterNav',
  component: FooterNavigation,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Navigation: Story = {
  render: () => (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: 'var(--dark-900)',
          padding: '40px',
        }}
      >
        <FooterNavigation />
      </div>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  ),
};
