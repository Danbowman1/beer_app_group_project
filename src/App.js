import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BeerInfo from './components/BeerInfo';
import BeerGallery from './components/BeerGallery'

function App() {




  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<BeerGallery/>} default/>
        <Route path='/beers/:id' element={<BeerInfo/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
