import styled from '@emotion/styled';
import { center } from '../../styles/mixins';

interface StatisticIconProps {
  path: string;
  alt: string;
}

const IconContainer = styled.div`
  ${center}
  position: absolute;
  top: 0;
  left: 32px;
  transform: translateY(-50%);
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: var(--secondary);

  img {
    width: 32px;
    height: 32px;
  }
`;

export default function StatisticIcon({ path, alt }: StatisticIconProps) {
  return (
    <IconContainer>
      <img src={path} alt={alt} />
    </IconContainer>
  );
}
