import styled from '@emotion/styled';
import { inner } from '../../styles/mixins';
import RoundFillButton from '../atoms/RoundFillButton';

const HeroContainer = styled.section`
  width: 100%;
`;

const HeroInner = styled.div`
  ${inner}
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding-top: 48px;
  padding-bottom: 148px;
`;

const HeroContent = styled.div`
  flex: 1;
`;

const HeroTitle = styled.p`
  margin-bottom: 8px;
  color: var(--dark-900);
  font-size: 3.5rem;
  font-weight: var(--fw-b);
  line-height: 1.2;
  text-wrap: balance;
`;

const HeroDescription = styled.p`
  margin-bottom: 32px;
  text-wrap: balance;
`;

const HeroImage = styled.div`
  flex: 1;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default function HeroSection() {
  return (
    <HeroContainer>
      <HeroInner>
        <HeroContent>
          <HeroTitle>More than just shorter links</HeroTitle>
          <HeroDescription>
            Build your brand's recognition and get detailed insights on how your links are
            performing.
          </HeroDescription>
          <RoundFillButton>Get Started</RoundFillButton>
        </HeroContent>
        <HeroImage>
          <img src="src/assets/images/illustration-working.svg" alt="hero image" />
        </HeroImage>
      </HeroInner>
    </HeroContainer>
  );
}
