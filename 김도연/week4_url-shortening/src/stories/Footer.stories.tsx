import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/organisms/Footer';
import App from '../App';

const meta: Meta<typeof Footer> = {
  title: 'organisms/Footer',
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SampleFooter: Story = {
  render: () => (
    <BrowserRouter>
      <Footer />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  ),
};
