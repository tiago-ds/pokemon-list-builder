import './App.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchComponent from './Components/Search/SearchComponent';
import NavComponent from './Components/Nav/NavComponent';
import FavoritesComponent from './Components/Favorites/FavoritesComponent';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <NavComponent />
      <Routes>
          <Route path="/search" element={<SearchComponent />} />
          <Route path="/favorite" element={<FavoritesComponent />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
