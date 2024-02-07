import { BrowserRouter as Router } from "react-router-dom";

import { About, Contact, Home, Projects } from "./pages";
import Parallax from './components/parallax/Parallax'
import Layout from './components/Layout';
import Work from './pages/Work/Work'
import CompanyList from './pages/CompanyList'

const App = () => {
  return (
    <main className='bg-black-500'>
      <Router>
        <Layout>
          <Home />
          <About />
          <Parallax/>
          <Work />
          <CompanyList/>
          <Projects />
          <Contact />
        </Layout>
      </Router>
    </main>
  );
};

export default App;
