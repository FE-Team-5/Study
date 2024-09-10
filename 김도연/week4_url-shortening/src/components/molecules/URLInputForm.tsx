import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import URLInput from '../atoms/URLInput';
import SquareFillButton from '../atoms/SquareFillButton';
import { URLTypes } from '../organisms/StatisticsSection';

interface URLInputFormProps {
  setShortenUrls: React.Dispatch<React.SetStateAction<URLTypes[]>>;
}

const FormWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-50%);
  overflow: hidden;
  width: calc(100% - 40px * 2);
  margin: 0 40px;
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

export default function URLInputForm({ setShortenUrls }: URLInputFormProps) {
  const [isError, setIsError] = useState(false);
  const [originUrl, setOriginUrl] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return setIsError(true);
    setOriginUrl(e.target.value);
    setIsError(false);
  };

  const handleClick = async () => {
    if (!originUrl) return setIsError(true);
    try {
      const response = await axios.post(
        '/api/v1/shorten',
        { url: originUrl },
        { headers: { 'Content-Type': 'application/json' } },
      );
      setShortenUrls((prevUrls) => {
        return [...prevUrls, { originUrl, shortenUrl: response.data.result_url }];
      });
    } catch (err) {
      console.error('Failed to shorten the URL.');
    }
  };

  return (
    <FormWrapper>
      <InputForm>
        <URLInput validationError={isError} onChange={handleInputChange} />
        <SquareFillButton onClick={handleClick}>Shorten It!</SquareFillButton>
      </InputForm>
    </FormWrapper>
  );
}
