import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

interface NavItemProps {
  path: string;
  children: React.ReactNode;
}

const NavItemContainer = styled(NavLink)`
  padding: 8px 12px;
  font-size: var(--fs-s);

  &:hover {
    color: var(--dark-900);
  }
`;

export default function NavItem({ path, children }: NavItemProps) {
  return <NavItemContainer to={path}>{children}</NavItemContainer>;
}
