import { useContext } from 'react';
import { AppContext } from './StateProvider';
import { Link} from 'react-router-dom';

// import styles
import styles from '../styles/Navbar.module.css';

function Navbar() {
	const context = useContext(AppContext);

	const logout = () => {
		context.dispatch({
			type: 'LOGOUT',
		});
	};

	return (
		<nav className={styles.navbar}>
			{context.state.isUserLoggedIn ? (
				<>
					<Link className={styles.navlink} to='/home'>Home</Link>
					
					<Link className={styles.navlink} to='/todo'>My Todo</Link>
					
					<span onClick={logout}>Logout</span>
				</>
			) : (
				<>
					<Link className={styles.navlink} to='/login'>Login</Link>
					
					<Link className={styles.navlink} to='/register'>Register</Link>
					
				</>
			)}
		</nav>
	);
}
export default Navbar;
