import styled from '@emotion/styled';
import { center } from '../../styles/mixins';

interface StatisticIconProps {
  path: string;
  alt: string;
}

const IconContainer = styled.div`
  ${center}
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: var(--secondary);

  img {
    width: 28px;
    height: 28px;
  }
`;

export default function StatisticIcon({ path, alt }: StatisticIconProps) {
  return (
    <IconContainer>
      <img src={path} alt={alt} />
    </IconContainer>
  );
}
