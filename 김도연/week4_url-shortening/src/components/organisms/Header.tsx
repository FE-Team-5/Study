import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { center, inner } from '../../styles/mixins';
import NavMenu from '../molecules/NavMenu';
import RoundFillButton from '../atoms/RoundFillButton';

const HeaderContainer = styled.header`
  width: 100%;
`;

const HeaderInner = styled.div`
  ${inner}
  display: flex;
  align-items: center;
  gap: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
`;

const MainLogoLink = styled(NavLink)``;

const MainLogo = styled.h1`
  ${center}
  width: 96px;
  background-image: url('src/assets/images/logo.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-indent: -9999px;
`;

const SignInButton = styled.button`
  margin-left: auto;
  padding: 8px;
  color: var(--dark-500);
  font-size: var(--fs-s);

  &:hover {
    color: var(--dark-900);
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderInner>
        <MainLogoLink to="/" aria-label="Go to main page">
          <MainLogo>Shortly</MainLogo>
        </MainLogoLink>
        <NavMenu />
        <SignInButton>Login</SignInButton>
        <RoundFillButton size="small">Sign Up</RoundFillButton>
      </HeaderInner>
    </HeaderContainer>
  );
}
