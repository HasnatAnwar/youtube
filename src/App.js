import { Route, Routes, BrowserRouter } from "react-router-dom";
import Topbar from './pages/Topbar'
import './App.css';
import Sidebar from "./pages/Sidebar";
import Tags from "./pages/Tags";
import MainBox from "./pages/MainBox";
import Shorts from "./pages/Shorts";
import Subs from "./pages/Subs";
import SubsHead from "./pages/SubsHead";
import Play from "./pages/Play";

function App() {
  return (
    <BrowserRouter>
      <Routes >

        <Route path='/' element={
          <>
            <Topbar />
            <div className="container" >
              <Sidebar />
              <div className="container_1">
                <Tags />
                <MainBox />
              </div>
            </div>
          </>
        }>
        </Route>
        <Route path='/shorts' element={
          <>
            <Topbar />
            <div className="container" >
              <Sidebar />
              <div className="container_1">
                <Shorts />
              </div>

            </div>
          </>
        }>
        </Route>
        <Route path='/subscription' element={
          <>
            <Topbar />
            <div className="container" >
              <Sidebar />
              <div className="container_1">
                <SubsHead/>
                <Subs />
              </div>

            </div>
          </>
        }>
        </Route>
        <Route path='/play' element={
          <>
            <Topbar/>
            <div className="container">
              <Play/>
            </div>
          </>
        }>
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
