import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faPinterest,
  faSquareFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { center } from '../../styles/mixins';

const SocialLinkWrap = styled.ul`
  display: flex;
  gap: 20px;
`;

const SocialLinkItem = styled.a`
  ${center}
  width: 20px;
  height: 20px;
  color: var(--white);
  font-size: 20px;

  &:hover {
    color: var(--primary);
  }
`;

export default function SocialLinkList() {
  return (
    <SocialLinkWrap>
      <SocialLinkItem
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FontAwesomeIcon icon={faSquareFacebook} />
      </SocialLinkItem>
      <SocialLinkItem
        href="https://x.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </SocialLinkItem>
      <SocialLinkItem
        href="https://kr.pinterest.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pinterest"
      >
        <FontAwesomeIcon icon={faPinterest} />
      </SocialLinkItem>
      <SocialLinkItem
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </SocialLinkItem>
    </SocialLinkWrap>
  );
}
