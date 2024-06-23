
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import CadUser from './pages/CadUSer/CadUser';
import CadEmpresa from './pages/CadEmpresa/CadEmpresa';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="page_wrapper">
        <div className="content">
          {/* <Home /> */}
          {/* <CadUser /> */}
          <CadEmpresa />
        </div>
      </div>
    </>
  )
}

export default App;
