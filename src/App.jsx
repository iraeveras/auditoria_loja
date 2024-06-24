
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="page_wrapper">
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App;
