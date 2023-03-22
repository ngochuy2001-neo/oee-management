import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
  <Router>
    <div className="App">
      <Header />
      <div className='mainApp'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;