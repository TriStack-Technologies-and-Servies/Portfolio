import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Service from './components/Service';
import Banner from './components/Banner';
import Work from './components/Work';
import Slider from './components/Slider';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {themeContext} from './components/context'
import { useContext } from 'react';
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background : darkMode ? "black" : '',
      color : darkMode?"white" : ''
    }}
    >
      <Navbar/>
      <Header/>
      <Service/>
      <Banner/>
      <Work/>
      <Slider/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
