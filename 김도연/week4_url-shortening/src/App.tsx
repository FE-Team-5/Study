import { Global } from '@emotion/react';
import { globalStyles } from './styles/globalStyles';

function App() {
  return (
    <>
      <Global styles={globalStyles} />
    </>
  );
}

export default App;
