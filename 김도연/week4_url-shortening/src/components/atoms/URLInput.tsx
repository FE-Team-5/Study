import { ChangeEventHandler } from 'react';
import styled from '@emotion/styled';

interface URLInputProps {
  validationError: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input = styled.input<URLInputProps>`
  flex: 1;
  min-height: 48px;
  padding: 8px 24px;
  color: ${(props) => (props.validationError ? 'var(--red)' : 'var(--dark-900)')};
  border-radius: 8px;
  outline: ${(props) => (props.validationError ? '2px solid var(--red)' : 'none')};
  outline-offset: 0;

  &:focus {
    outline: 2px solid ${(props) => (props.validationError ? 'var(--red)' : 'var(--primary)')};
  }

  &::placeholder {
    color: ${(props) => (props.validationError ? 'var(--red)' : 'var(--dark-500)')};
  }
`;

export default function URLInput({ validationError, onChange }: URLInputProps) {
  return (
    <Input
      placeholder="Shorten a link here..."
      validationError={validationError}
      onChange={onChange}
    />
  );
}
