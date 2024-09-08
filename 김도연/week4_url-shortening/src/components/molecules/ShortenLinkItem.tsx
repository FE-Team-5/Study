import { useState } from 'react';
import styled from '@emotion/styled';
import SquareFillButton from '../atoms/SquareFillButton';

export interface ShortenLinkItemProps {
  originLink: string;
  shortenLink: string;
}

const ShortenItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  padding: 16px 24px;
  border-radius: 4px;
  background-color: var(--white);
  box-shadow: 0 8px 12px 0 rgb(158 154 167 / 20%);
`;

const OriginLink = styled.p`
  color: var(--dark-900);
`;

const ShortenLink = styled.p`
  margin-left: auto;
  color: var(--primary);
`;

export default function ShortenLinkItem({ originLink, shortenLink }: ShortenLinkItemProps) {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <ShortenItemContainer>
      <OriginLink>{originLink}</OriginLink>
      <ShortenLink>{shortenLink}</ShortenLink>
      <SquareFillButton size="small" primary={!isCopied}>
        {isCopied ? 'Copied!' : 'Copy'}
      </SquareFillButton>
    </ShortenItemContainer>
  );
}
