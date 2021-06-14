import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {  useHistory } from 'react-router-dom';

import { AppContext } from '../components/StateProvider';

const Home = () => {
	
    const { state, setState } = useContext(AppContext);
	const history = useHistory();

	return (!state.isLoggedIn ? (
        <div className='home'>
			<h2 className='home-title'>Welcome, You are almost there!</h2>
			<p className='home-body'>To start creating your Todo List</p>
			<Link to={'/register'}>Register  </Link>
            or
			<Link to={'/login'}>Login</Link>
           <span>to get started</span> 

		</div>
                
        ) : (
            <div className='home'>
			<h2 className='home-title'>Welcome, You are in!</h2>
			<p className='home-body'>Start creating your Todo</p>
			<Link to={'/todo'}> Get started </Link>
		</div>
        ))
        
    };
        
		
        

export default Home;
