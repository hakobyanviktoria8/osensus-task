import './styles/App.css';
import { Routes, Route, Link } from "react-router-dom";
import HomeUsers from './routes/HomeUsers';
import User from './routes/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeUsers />} />
        <Route path="users" element={<HomeUsers />}>
          <Route path=":id" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
