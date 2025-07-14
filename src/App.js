import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewShop from './components/ViewNews';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ViewShop/>}/>
    </Routes>
    </BrowserRouter>
  );
}


export default App;
