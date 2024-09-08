import styled from '@emotion/styled';
import { inner } from '../../styles/mixins';
import RoundFillButton from '../atoms/RoundFillButton';

const CTAContainer = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  background-color: var(--secondary);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(src/assets/images/bg-boost-desktop.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

const CTAInner = styled.div`
  ${inner}
  position: relative;
  z-index: 100;
  padding-top: 48px;
  padding-bottom: 48px;
  text-align: center;
`;

const CTATitle = styled.h2`
  margin-bottom: 16px;
  color: var(--white);
`;

export default function CTASection() {
  return (
    <CTAContainer>
      <CTAInner>
        <CTATitle>Boost your links today</CTATitle>
        <RoundFillButton>Get Started</RoundFillButton>
      </CTAInner>
    </CTAContainer>
  );
}
