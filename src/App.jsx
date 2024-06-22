
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import './App.css'
import CadUser from './pages/CadUSer/CadUser';


function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="page_wrapper">
        <div className="content">
          <Home />
          {/* <CadUser /> */}
        </div>
      </div>
    </>
  )
}

export default App
