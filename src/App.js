import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Origin1 from './pages/origin1';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Origin1 />} />
    </Routes>
  );
}

export default App;
