import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import PageOne from './components/pageOne';
import PageTwo from './components/pageTwo';
import PageThree from './components/pageThree';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route exact path={'/'} component={PageOne}/>
            <Route  path={'/PageTwo'} component={PageTwo}/>
            <Route  path={'/PageThree'} component={PageThree}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
