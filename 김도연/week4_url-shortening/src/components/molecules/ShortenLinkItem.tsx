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

  const copyShortenUrl = async (url: string) => {
    if (isCopied) return;
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied((isCopied) => !isCopied);
      alert('클립보드에 단축 링크를 복사했습니다.');
    } catch (err) {
      console.error('링크 복사에 실패했습니다:', err);
    }
  };

  return (
    <ShortenItemContainer>
      <OriginLink>{originLink}</OriginLink>
      <ShortenLink>{shortenLink}</ShortenLink>
      <SquareFillButton
        size="small"
        primary={!isCopied}
        onClick={() => copyShortenUrl(shortenLink)}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </SquareFillButton>
    </ShortenItemContainer>
  );
}
