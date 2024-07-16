
import './App.css';
import About from './Component/About';
import Contact from './Component/Conatct';
import Header from './Component/Header';
import Home from './Component/Home';
import MyProjects from './Component/Myproject';
import Skills from './Component/Skills';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <>
    <Helmet>
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
            </Helmet>
    <Header />
    <Home />
    <About />
    <MyProjects />
    <Skills />
    <Contact />
    </>
  );
}

export default App;
