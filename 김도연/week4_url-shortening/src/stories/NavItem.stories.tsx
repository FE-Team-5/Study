import { Meta, StoryObj } from '@storybook/react';
import NavItem from '../components/atoms/NavItem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';

const meta: Meta<typeof NavItem> = {
  title: 'atoms/NavItem',
  component: NavItem,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NavMenu: Story = {
  args: {
    path: '/',
    children: 'Features',
  },
  render: (args) => (
    <BrowserRouter>
      <NavItem {...args} />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  ),
};
