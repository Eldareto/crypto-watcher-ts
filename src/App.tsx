import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

/* Redux */
import { useDispatch } from 'react-redux';

/* Components */
import Header from './components/Header';
import Crypto from './components/Crypto';
import Home from './components/Home';
import Watchlist from './components/Watchlist';

/* Actions */
import * as cryptoActions from './store/actions/cryptoActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cryptoActions.fetchCryptoRequest());
  });

  return (
    <div className='App'>
      <Header></Header>

      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/crypto' element={<Crypto />} />
        <Route path='/watchlist' element={<Watchlist />} />
      </Routes>
    </div>
  );
}

export default App;
