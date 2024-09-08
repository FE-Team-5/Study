import styled from '@emotion/styled';

type ButtonSize = 'medium' | 'small';

interface ButtonProps {
  size?: ButtonSize;
  children: string;
}

const RoundButton = styled.button<ButtonProps>`
  flex-shrink: 0;
  width: fit-content;
  padding: 8px 24px;
  border-radius: 24px;
  background-color: var(--primary);
  color: var(--white);
  font-size: ${(props) => (props.size === 'medium' ? 'var(--fs-base)' : 'var(--fs-s)')};
  font-weight: var(--fw-m);

  &:hover {
    background-color: var(--primary-lighter);
  }
`;

export default function RoundFillButton({ size = 'medium', children }: ButtonProps) {
  return <RoundButton size={size}>{children}</RoundButton>;
}
