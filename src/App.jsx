import './scss/style.scss';
import { useEffect, useRef } from 'react';

import { useDispatch } from 'react-redux';
import { fetchData } from './redux/slices/dataSlice';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  const refOne = useRef('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <>
      <div ref={refOne} className="wrapper">
        <Header refOne={refOne} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
