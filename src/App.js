import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Project from './components/Projects/Project';
import 'antd/dist/antd.css'


function App() {
  return (
    <div className='App'>
      <div className='home'>
      <Navbar />
      <Intro />
      <About />
      <Project />
      </div>
     
    </div>
  );
}

export default App;
