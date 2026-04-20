
import logo from './octofitapp-small.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Octofit Logo" />
          <h1 className="ms-3">Octofit Tracker</h1>
        </header>
        <nav className="navbar navbar-expand-lg navbar-light px-3">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Inicio</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/activities">Actividades</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/teams">Equipos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/users">Usuarios</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/workouts">Entrenamientos</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={
              <div className="card shadow-sm mb-4">
                <div className="card-header">
                  Bienvenido a Octofit Tracker
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Selecciona una sección del menú para comenzar.
                  </p>
                </div>
              </div>
            } />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
