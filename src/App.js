import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import DeviceReport from './pages/DeviceReport'
import InteruptionReport from './pages/InteruptionReport';
import Settings from "./pages/Settings"

function App() {
  return (
  <Router>
    <div className="App">
      <Header />
      <div className='mainApp'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/devices' element={<DeviceReport />}/>
          <Route path='/interuptions' element={<InteruptionReport/>}/>
          <Route path='/settings' element={<Settings />}/>
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;