import { About, Contact, Home } from "./pages";
import Parallax from './components/parallax/Parallax'
import Layout from './components/Layout';
import Projects from './pages/Project/Projects'
import Experience from './components/Experience';

const App = () => {
  return (
    <main className='bg-black-500'>
      <Layout>
        <Home />
        <About />
        <Parallax />
        <Projects />
        <Experience />
        <Contact />
      </Layout>
    </main>
  );
};

export default App;
