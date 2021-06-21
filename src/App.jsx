import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';

import TypeNote from './components/TypeNote';
import Navbar from './components/Navbar';
import StateProvider from './components/StateProvider';


//import styles 
import './index.css';

const App = () => {
  return (
    <StateProvider>
    <Router>
        <Navbar />

        <Switch>
            {/* render Register Component when we hit /register */}
            <Route exact path='/register'>
                <Register />
            </Route>

            {/* render Login Component when user hit /login */}
            <Route exact path='/login'>
                <Login />
            </Route>
          
            {/* render Todo Component when user hit create todo */}
            <Route exact path='/typenote'>
                <TypeNote />
            </Route>
			
        </Switch>
    </Router>
</StateProvider>
  )
};

export default App;
