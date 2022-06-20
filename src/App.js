import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Page/Home';
import Person from './Page/Person';
import People from './Page/People';

function App() {
  return (
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/people" element={<People />} />
          <Route exact path="/person" element={<Person />} />
        </Routes>
      </div>
  );
}

export default App;
