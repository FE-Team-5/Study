import type { Preview, StoryFn } from '@storybook/react';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/styles/globalStyles';

export const decorators = [
  (Story: StoryFn) => (
    <>
      <div style={{ padding: '8px', height: '100vh', background: '#F9FBFF' }}>
        <Global styles={globalStyles} />
        <Story />
      </div>
    </>
  ),
];

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
