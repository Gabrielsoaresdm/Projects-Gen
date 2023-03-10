import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';
import Navbar from  './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';


function App() {
  return (
    <Router>
      < Navbar/>

      <Switch>
        <Container customClass="min-height">
          < Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/newproject">
            <NewProject/>
          </Route>
          <Route path="/project/:id">
            <Project/>
          </Route>
        </Container>
      </Switch>
     <Footer/>
    </Router>
  );
}

export default App;
