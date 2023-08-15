import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume/Resume';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Sevrice from './Components/Sevrice/Sevrice';

const App = () => {
  return (
    <>
    <Sidebar />
    <main className='main'>
      <Home />
      <About />
      <Sevrice />
      
      <Resume />
      <Portfolio />
      <Contact />
    </main>
    </>
  );
};

export default App;
