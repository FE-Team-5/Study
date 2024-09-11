import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavMenu from '../components/molecules/NavMenu';
import App from '../App';

const meta: Meta<typeof NavMenu> = {
  title: 'molecules/NavMenu',
  component: NavMenu,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Navigation: Story = {
  render: () => (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  ),
};
