import './styles/App.css';
import { Routes, Route} from "react-router-dom";
import HomeUsers from './routes/HomeUsers';
import User from './routes/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeUsers />} />
        <Route path="/osensus-task" element={<HomeUsers />} />
        <Route path="users/:userId" element={<User/>} />
      </Routes>
    </div>
  );
}

export default App;
