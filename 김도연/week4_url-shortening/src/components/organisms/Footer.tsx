import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { center, inner } from '../../styles/mixins';
import FooterNavigation from '../molecules/FooterNavigation';
import SocialLinkList from '../molecules/SocialLinkList';

const FooterContainer = styled.header`
  width: 100%;
  background-color: var(--dark-900);
`;

const FooterInner = styled.div`
  ${inner}
  display: flex;
  gap: 96px;
  padding-top: 64px;
  padding-bottom: 64px;
`;

const MainLogoLink = styled(NavLink)``;

const MainLogo = styled.h1`
  ${center}
  width: 96px;
  background-image: url('src/assets/images/whiteLogo.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-indent: -9999px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterInner>
        <MainLogoLink to="/" aria-label="Go to main page">
          <MainLogo>Shortly</MainLogo>
        </MainLogoLink>
        <FooterNavigation />
        <SocialLinkList />
      </FooterInner>
    </FooterContainer>
  );
}
