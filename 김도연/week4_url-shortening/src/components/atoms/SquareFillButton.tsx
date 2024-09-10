import styled from '@emotion/styled';
import { MouseEventHandler } from 'react';

type ButtonSize = 'medium' | 'small';

interface SquareButtonProps {
  primary?: boolean;
  size?: ButtonSize;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const SquareButton = styled.button<SquareButtonProps>`
  flex-shrink: 0;
  width: fit-content;
  min-width: ${(props) => (props.size === 'medium' ? 'auto' : '88px')};
  min-height: ${(props) => (props.size === 'medium' ? '48px' : 'inherit')};
  padding: ${(props) => (props.size === 'medium' ? '8px 28px' : '6px 16px')};
  border-radius: ${(props) => (props.size === 'medium' ? '8px' : '4px')};
  background-color: ${(props) => (props.primary ? 'var(--primary)' : 'var(--secondary)')};
  color: var(--white);
  font-size: ${(props) => (props.size === 'medium' ? 'var(--fs-base)' : 'var(--fs-s)')};
  font-weight: var(--fw-m);

  &:hover {
    background-color: ${(props) => (props.primary ? 'var(--primary-lighter)' : 'var(--secondary)')};
    cursor: ${(props) => (props.primary ? 'pointer' : 'auto')};
  }
`;

export default function SquareFillButton({
  primary = true,
  size = 'medium',
  children,
  onClick,
}: SquareButtonProps) {
  return (
    <SquareButton primary={primary} size={size} onClick={onClick}>
      {children}
    </SquareButton>
  );
}
