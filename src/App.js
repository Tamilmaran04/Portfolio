import './App.css';
import About from './About Component/About';
import Header from './Header Component/Header';
import Project from './Project/Project';
// import Skill from './Skills/Skill';
import Contact from './Contact/Contact';

function App() {
  return (
    <div>
    <Header/>
    <About/>
    <Project/>
    {/* <Skill/> */}
    <Contact/>
    </div>
  );
}

export default App;
