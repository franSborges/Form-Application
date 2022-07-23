import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
 

function App() {
  return (
    <> 
    <Header/>
    <Router>
      <Switch>
        <Route exact path="/" component={Step1}/>
        <Route exact path="/step2" component={Step2}/>
        <Route exact path="/step3" component={Step3}/>
        <Route exact path="/result" component={result}/>
      </Switch>
    </Router>
     </>
  );
}

export default App;
