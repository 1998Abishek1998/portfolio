import { BrowserRouter as Router } from "react-router-dom";

import { About, Contact, Home } from "./pages";
import Parallax from './components/parallax/Parallax'
import Layout from './components/Layout';
import Projects from './pages/Project/Projects'
import Experience from './components/Experience';

const App = () => {
  return (
    <main className='bg-black-500'>
      <Router>
        <Layout>
          <Home />
          <About />
          <Parallax />
          <Projects />
          <Experience />
          <Contact />
        </Layout>
      </Router>
    </main>
  );
};

export default App;
