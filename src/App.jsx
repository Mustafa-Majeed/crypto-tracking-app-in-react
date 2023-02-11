import HomePage from './pages/HomePage';
import Header from './component/Header';
// import PaginationExample from './component/PaginationExample'
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Coindetail from './pages/Coindetail';

function App() {
  return (
    <>
      <Header /> 
      <Routes>
      <Route path='/' element={<HomePage />}/>
        <Route path='/Coindetail/:id' element={<Coindetail/>}/>
      </Routes>
    </>
  );
}

export default App;
