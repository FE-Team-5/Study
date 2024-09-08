import styled from '@emotion/styled';
import CustomLink from '../atoms/CustomLink';

interface NavLinkProps {
  path: string;
  label: string;
}

interface NavLinkListProps {
  title: string;
  links: NavLinkProps[];
}

const featureLinks: NavLinkProps[] = [
  { path: '/', label: 'Link Shortening' },
  { path: '/', label: 'Branded Links' },
  { path: '/', label: 'Analytics' },
];

const resourceLinks: NavLinkProps[] = [
  { path: '/', label: 'Blog' },
  { path: '/', label: 'Developers' },
  { path: '/', label: 'Support' },
];

const companyLinks: NavLinkProps[] = [
  { path: '/', label: 'About' },
  { path: '/', label: 'Our Team' },
  { path: '/', label: 'Careers' },
  { path: '/', label: 'Contact' },
];

const FooterNav = styled.div`
  display: flex;
  gap: 96px;
  margin-left: auto;
`;

const NavLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ListTitle = styled.span`
  margin-bottom: 8px;
  color: var(--white);
  font-size: var(--fs-s);
  font-weight: var(--fw-m);
`;

const NavLinkListComponent = ({ title, links }: NavLinkListProps) => (
  <NavLinkList>
    <ListTitle>{title}</ListTitle>
    {links.map(({ path, label }) => (
      <CustomLink key={label} path={path}>
        {label}
      </CustomLink>
    ))}
  </NavLinkList>
);

export default function FooterNavigation() {
  return (
    <FooterNav>
      <NavLinkListComponent title="Features" links={featureLinks} />
      <NavLinkListComponent title="Resources" links={resourceLinks} />
      <NavLinkListComponent title="Company" links={companyLinks} />
    </FooterNav>
  );
}
