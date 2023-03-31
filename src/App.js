import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import DeviceReport from './pages/DeviceReport'
import InteruptionReport from './pages/InteruptionReport';
import Settings from "./pages/Settings"
import Sidebar from './components/Sidebar';

function App() {
  return (
  <Router>
    <div className="App">
      <Sidebar />
      <div className='mainApp'>
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