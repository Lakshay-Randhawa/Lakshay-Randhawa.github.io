import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Project from './components/Projects/Project';
import Footer from './components/Footer/Footer'
import 'antd/dist/antd.css'



function App() {
  return (
    <div className='App'>
      <div className='home'>
      <Navbar />
      <Intro />
      <About />
      <Project />
      <Footer />
      </div>
     
    </div>
  );
}

export default App;
