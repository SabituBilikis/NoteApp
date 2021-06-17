import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home'; 
import Todo from './components/Todo';
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
            {/* render home Component when user hit /home */}
            <Route exact path='/home'>
                <Home />
            </Route>
            {/* render Todo Component when user hit create todo */}
            <Route exact path='/todo'>
                <Todo />
            </Route>
			
        </Switch>
    </Router>
</StateProvider>
  )
};

export default App;
