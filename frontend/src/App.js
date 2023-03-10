import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Fashion cart</Link>
        </header>

        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
