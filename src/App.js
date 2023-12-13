import './styles/main.css';

import NavBar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Contacts from './pages/Contacts';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div classNameName="App">
      < Router >

          <NavBar />

          <Routes>
              <Route path='/' exact={true} element={<Home />} />
          <Route path='/projects' exact={true} element={<Projects />} />
          <Route path='/project/:id' exact={true} element={<Project />} />
              <Route path='/contacts' exact={true} element={<Contacts />} />
          </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
