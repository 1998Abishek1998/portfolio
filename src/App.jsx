import { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Navbar } from "./components";
// import { About, Contact, Home, Projects } from "./pages";

const Layout = lazy(() => import('./components/Layout'))
const About = lazy(() => import("./pages/About"))
const Contact = lazy(() => import("./pages/Contact"))
const Home = lazy(() => import("./pages/Home"))
const Projects = lazy(() => import("./pages/Projects"))

const App = () => {
  return (
    <main className='bg-black-500'>
      <Suspense fallback={'...'}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/*'
              element={
                <>
                  <Routes>
                    <Route path='/about'
                      element={
                        <Layout>
                          <About />
                        </Layout>
                      }
                    />
                    <Route path='/projects'
                      element={
                        <Layout>
                          <Projects />
                        </Layout>
                      }
                    />
                    <Route path='/contact'
                      element={
                        <Layout>
                          <Contact />
                        </Layout>
                      }
                    />
                  </Routes>
                </>
              }
            />
          </Routes>
        </Router>
      </Suspense>
    </main>
  );
};

export default App;
