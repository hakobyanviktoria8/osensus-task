import './styles/App.css';
import { Routes, Route, Link } from "react-router-dom";
import HomeUsers from './routes/HomeUsers';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeUsers />} />
        <Route path="/users" element={<HomeUsers />} />
      </Routes>
    </div>
  );
}

export default App;
