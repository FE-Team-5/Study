import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

interface CustomLinkProps {
  path: string;
  children: React.ReactNode;
}

const CustomLinkContainer = styled.li`
  color: var(--dark-300);
  font-size: var(--fs-s);
  font-weight: initial;

  &:hover {
    color: var(--primary);
  }
`;

export default function CustomLink({ path, children }: CustomLinkProps) {
  return (
    <CustomLinkContainer>
      <NavLink to={path}>{children}</NavLink>
    </CustomLinkContainer>
  );
}
