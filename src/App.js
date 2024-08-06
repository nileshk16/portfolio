import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Intro from './components/Intro';
import Project from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
        <Header/>
        <Intro />
        <About/>
        <Project/>
        <Resume/>
        <Contact/>
    </div>
  );
}

export default App;