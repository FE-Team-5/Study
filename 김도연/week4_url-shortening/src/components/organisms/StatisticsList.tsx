import styled from '@emotion/styled';
import StatisticCard, { StatisticCardProps } from '../molecules/StatisticCard';

const ListContainer = styled.div`
  display: flex;
  gap: 32px;
  position: relative;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: var(--primary);
  }
`;

const statisticCards: StatisticCardProps[] = [
  {
    title: 'Brand Recognition',
    summary: `Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.`,
    iconPath: 'src/assets/icons/icon-brand-recognition.svg',
  },
  {
    title: 'Detailed Records',
    summary: `Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`,
    iconPath: 'src/assets/icons/icon-detailed-records.svg',
  },
  {
    title: 'Fully Customizable',
    summary: `Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`,
    iconPath: 'src/assets/icons/icon-fully-customizable.svg',
  },
];

export default function StatisticsList() {
  return (
    <ListContainer>
      {statisticCards.map(({ ...props }) => (
        <StatisticCard key={props.title} {...props} />
      ))}
    </ListContainer>
  );
}
