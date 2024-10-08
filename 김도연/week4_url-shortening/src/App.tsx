import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/Index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
