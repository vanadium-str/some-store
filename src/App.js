import './App.css';
import AboutBrand from './components/AboutBrand';
import Conception from './components/Conception';
import Goods from './components/Goods';
import Header from './components/Header';
import Products from './components/Products';
import Instagram from './components/Instagram';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
function App() {

  return (
      <div>
        <Header/>
        <Conception/>
        <Goods/>
        <AboutBrand/>
        <Products/>
        <Instagram/>
        <ContactUs/>
        <Footer/>
      </div>
  );
}

export default App;
