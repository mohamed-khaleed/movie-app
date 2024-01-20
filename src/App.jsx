
import React , { Suspense } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavHeader from './components/navHeader';
import { Route, Routes } from 'react-router-dom'
// import Movies from './pages/movies';
// import MovieDetail from './pages/movieDetail';
// import NotFound from './pages/notFound';
// import WatchingList from './pages/watchingList';
// import RegistrationPage from './pages/register';
import { useState } from 'react';
import { NavLangContext } from './context/navLang';
import Loading from './pages/loading';
function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const Movies = React.lazy(()=>import("./pages/movies"))
  const  MovieDetail = React.lazy(()=>import("./pages/movieDetail"))
  const NotFound = React.lazy(()=>import("./pages/notFound"))
  const WatchingList = React.lazy(()=>import("./pages/watchingList"))
  const RegistrationPage = React.lazy(()=>import("./pages/register"))
  


  return (
    <>
     <BrowserRouter>
     <NavLangContext.Provider value={{selectedLanguage,setSelectedLanguage}}>
     <NavHeader/>
     <Suspense fallback={<Loading/>}>
     <Routes>
        <Route path='/' element={<Movies/>} />
        <Route path='/register' element={< RegistrationPage/>} />
        <Route path='watchingList' element={<WatchingList/>} />
        <Route path='movie-Detail/:id' element={<MovieDetail/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
     </Suspense>
      
     </NavLangContext.Provider>
      
     </BrowserRouter>
    </>
  );
}

export default App;
