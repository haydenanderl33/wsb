import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage/homepage-index';
import Aboutpage from './components/Aboutpage/aboutpage-index';
import AcaiMenupage from './components/AcaiMenupage/acai-menupage-index';
import PitayaMenupage from './components/PitayaMenuPage/pitaya-menu-index';

const App = () => {

  return(
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/menu/açaí-bowls' component={AcaiMenupage} />
        <Route path='/menu/pitaya-bowls' component={PitayaMenupage} />
        <Route path='/about' component={Aboutpage} />
      </Switch>
    </Router>
  )
}

export default App;
