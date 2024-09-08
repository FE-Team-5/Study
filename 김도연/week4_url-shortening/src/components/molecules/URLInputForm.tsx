import { useState } from 'react';
import styled from '@emotion/styled';
import URLInput from '../atoms/URLInput';
import SquareFillButton from '../atoms/SquareFillButton';

const FormContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 48px;
  border-radius: 8px;
  background-color: var(--secondary);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(src/assets/images/bg-shorten-desktop.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

const InputForm = styled.div`
  display: flex;
  gap: 16px;
  position: relative;
  z-index: 100;
`;

export default function URLInputForm() {
  const [isError, setIsError] = useState(false);

  return (
    <FormContainer>
      <InputForm>
        <URLInput validationError={isError} />
        <SquareFillButton>Shorten It!</SquareFillButton>
      </InputForm>
    </FormContainer>
  );
}
