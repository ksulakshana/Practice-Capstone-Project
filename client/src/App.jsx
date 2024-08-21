import { useContext } from "react";
// import './App.css'
import { AppContext } from "./context/AppContext";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import GenrePage from "./pages/GenrePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/register" element = {<RegisterPage/>}/>
        <Route path="/home" element={<RegisterPage/>}/>
        <Route path="/genres" element={<GenrePage/>}/>
        <Route path="/carousel" element={<RegisterPage/>}/>
        <Route path="/dashboard" element={<RegisterPage/>}/>
        <Route path="/movie" element={<RegisterPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
