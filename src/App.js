import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './components/Home';
import Detail from './components/Detail';
import Navigation from './components/Navigation';
import Header from './components/Header';

function App() {
  const selectedCity = useSelector((state) => state.cities.selectedCity);

  return (
    <Router>
      <Navigation />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail city={selectedCity} />} />
      </Routes>
    </Router>
  );
}

export default App;
