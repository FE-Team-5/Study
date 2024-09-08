import styled from '@emotion/styled';

type ButtonSize = 'medium' | 'small';

interface SquareButtonProps {
  primary?: boolean;
  size?: ButtonSize;
  children: React.ReactNode;
}

const SquareButton = styled.button<SquareButtonProps>`
  flex-shrink: 0;
  width: fit-content;
  min-width: ${(props) => (props.size === 'medium' ? 'auto' : '96px')};
  padding: ${(props) => (props.size === 'medium' ? '8px 24px' : '8px 20px')};
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
}: SquareButtonProps) {
  return (
    <SquareButton primary={primary} size={size}>
      {children}
    </SquareButton>
  );
}
