import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './elements/Home';
import Create from './elements/Create'
import Read from './elements/Read'
import Edit from './elements/Edit'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/read/:id" element={<Read />}></Route>
        <Route path="/edit//:id" element={<Edit />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
