import { Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import UserProfilePage from './pages/UserProfilePage';
import EventDetailsPage from './pages/EventDetailsPage';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App-contrainer">
      <Header />
   <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<UserProfilePage />} />
      <Route path="/events/:id" element={<EventDetailsPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </div>
  );
}

export default App;
