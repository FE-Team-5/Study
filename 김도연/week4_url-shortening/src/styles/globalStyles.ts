import { css } from '@emotion/react';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  :root {
    /* Color */
    --primary: #2acfcf;
    --primary-lighter: #9ae3e2;
    --secondary: #3b3054;
    --red: #f46262;

    --dark-300: #bfbfbf;
    --dark-500: #9e9aa7;
    --dark-700: #35323e;
    --dark-900: #232127;
    --white: #ffffff;

    /* Font Size */
    --fs-xs: 0.75rem;
    --fs-s: 0.875rem;
    --fs-base: 1rem;
    --fs-l: 1.125rem;
    --fs-xl: 1.25rem;
    --fs-2xl: 1.5rem;

    /* Font Weight */
    --fw-m: 500;
    --fw-b: 700;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: var(--white);
    color: var(--dark-500);
    font-size: var(--fs-base);
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;
