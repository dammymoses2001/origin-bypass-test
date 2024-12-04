import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Origin1 from './pages/origin1';
import Origin2 from './pages/origin1 copy';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Origin1 />} />
      <Route path="/tets" element={<Origin2 />} />
    </Routes>
  );
}

export default App;
