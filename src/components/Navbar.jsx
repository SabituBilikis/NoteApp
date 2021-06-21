import { useContext } from 'react';
import { AppContext } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';

// import styles
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
	const { state, setState } = useContext(AppContext);


	const logout = () => {
		setState(prev => {
			return {
				...prev,
				isLoggedIn: false,
				userEmail: null,
				userId: null,
			};
		});
		
	};

	return (
		<nav className={styles.navbar}>
			{!state.isLoggedIn ? (
				<>
					<Link className={styles.navlink} to='/register'>
						Register
					</Link>
					<Link className={styles.navlink} to='/login'>
						Login
					</Link>
				</>
			) : (
				<>
					<Link className={styles.navlink} to='/typenote'>
					TypeNote
					</Link>
					<span onClick={logout} className={styles.navlink}>
						Logout
					</span>
				</>
			)}
		</nav>
	);
};

export default Navbar;

