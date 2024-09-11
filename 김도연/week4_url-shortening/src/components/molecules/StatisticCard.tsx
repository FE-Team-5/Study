import styled from '@emotion/styled';
import StatisticIcon from '../atoms/StatisticIcon';

export interface StatisticCardProps {
  title: string;
  summary: string;
  iconPath: string;
}

const CardContainer = styled.div`
  position: relative;
  width: calc(100% / 3);
  padding: 64px 32px 40px 32px;
  border-radius: 8px;
  background-color: var(--white);
  box-shadow: 0 8px 12px 0 rgb(158 154 167 / 20%);

  &:nth-of-type(2) {
    transform: translateY(36px);
  }

  &:nth-of-type(3) {
    transform: translateY(72px);
  }
`;

const StatisticCardTitle = styled.p`
  margin-bottom: 16px;
  color: var(--secondary);
  font-size: var(--fs-l);
  font-weight: var(--fw-b);
`;

const StatisticCardSummary = styled.p`
  text-wrap: pretty;
`;

export default function StatisticCard({ title, summary, iconPath }: StatisticCardProps) {
  return (
    <CardContainer>
      <StatisticCardTitle>{title}</StatisticCardTitle>
      <StatisticCardSummary>{summary}</StatisticCardSummary>
      <StatisticIcon path={iconPath} alt={title} />
    </CardContainer>
  );
}
