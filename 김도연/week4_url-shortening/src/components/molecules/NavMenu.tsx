import styled from '@emotion/styled';
import NavItem from '../atoms/NavItem';

interface NavMenuItemProps {
  path: string;
  label: string;
}

const navMenuItems: NavMenuItemProps[] = [
  { path: '/', label: 'Features' },
  { path: '/', label: 'Pricing' },
  { path: '/', label: 'Resources' },
];

const NavigationMenu = styled.ul`
  display: flex;
`;

export default function NavMenu() {
  return (
    <NavigationMenu>
      {navMenuItems.map(({ path, label }) => (
        <NavItem key={label} path={path}>
          {label}
        </NavItem>
      ))}
    </NavigationMenu>
  );
}
