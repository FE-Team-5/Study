import styled from '@emotion/styled';
import { inner } from '../../styles/mixins';
import StatisticsList from './StatisticsList';

const StatisticsContainer = styled.section`
  width: 100%;
  background-color: var(--dark-100);
`;

const StatisticsInner = styled.div`
  ${inner}
  padding-top: 180px;
  padding-bottom: 200px;
`;

const StatisticsContent = styled.div`
  width: 42%;
  margin: 0 auto;
  text-align: center;
`;

const StatisticsTitle = styled.h2`
  margin-bottom: 8px;
  color: var(--secondary);
`;

const StatisticsDescription = styled.p`
  margin-bottom: 88px;
  text-wrap: pretty;
`;

export default function StatisticsSection() {
  return (
    <StatisticsContainer>
      <StatisticsInner>
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
