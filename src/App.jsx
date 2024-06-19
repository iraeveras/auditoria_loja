
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="page_wrapper">
        <div className="content">
          <Dashboard />
        </div>
      </div>
    </>
  )
}

export default App
