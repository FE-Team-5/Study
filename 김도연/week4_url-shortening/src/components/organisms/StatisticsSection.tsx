import { useState } from 'react';
import styled from '@emotion/styled';
import { inner } from '../../styles/mixins';
import URLInputForm from '../molecules/URLInputForm';
import StatisticsList from './StatisticsList';
import ShortenLinkItem from '../molecules/ShortenLinkItem';

export interface URLTypes {
  originUrl: string;
  shortenUrl: string;
}

const StatisticsContainer = styled.section`
  width: 100%;
  background-color: var(--dark-100);
`;

const StatisticsInner = styled.div`
  ${inner}
  position: relative;
  padding-top: 100px;
  padding-bottom: 200px;
`;

const ShortenUrlList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StatisticsContent = styled.div`
  width: 42%;
  margin: 0 auto;
  text-align: center;
`;

const StatisticsTitle = styled.h2`
  margin-top: 80px;
  margin-bottom: 8px;
  color: var(--secondary);
`;

const StatisticsDescription = styled.p`
  margin-bottom: 88px;
  text-wrap: pretty;
`;

export default function StatisticsSection() {
  const [shortenUrls, setShortenUrls] = useState<URLTypes[]>([]);

  return (
    <StatisticsContainer>
      <StatisticsInner>
        <URLInputForm setShortenUrls={setShortenUrls} />
        {shortenUrls.length > 0 && (
          <ShortenUrlList>
            {shortenUrls.map(({ originUrl, shortenUrl }, i) => (
              <ShortenLinkItem
                key={i}
                originLink={originUrl}
                shortenLink={shortenUrl}
              ></ShortenLinkItem>
            ))}
          </ShortenUrlList>
        )}
        <StatisticsContent>
          <StatisticsTitle>Advanced Statistics</StatisticsTitle>
          <StatisticsDescription>
            Track how your links are performing across the web with our advanced statistics
            dashboard.
          </StatisticsDescription>
        </StatisticsContent>
        <StatisticsList />
      </StatisticsInner>
    </StatisticsContainer>
  );
}
