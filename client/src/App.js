import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home}></Route>
        <Route path="/" element={Create}></Route>
        <Route path="/" element={Read}></Route>
        <Route path="/" element={Edit}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
