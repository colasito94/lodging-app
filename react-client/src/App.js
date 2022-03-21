import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./Views/HomePage";
import Properties from "./Views/Properties";
import Hosts from "./Views/Hosts";
import Guests from "./Views/Guests";
import Reservations from "./Views/Reservations";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            />
            <Route path="/" exact
                   element={<HomePage />}
            />
            <Route path="/properties" exact
                   element={<Properties />}
            />
            <Route path="/hosts" exact
                   element={<Hosts />}
            />
            <Route path="/guests" exact
                   element={<Guests />}
            />
            <Route path="/reservations" exact
                   element={<Reservations />}
            />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
