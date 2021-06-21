import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AppContext } from '../components/StateProvider';
// import styles
//styles
import '../styles/RegLog.css';

const Register = () => {
	const { register, handleSubmit } = useForm();
	const { setState } = useContext(AppContext);
	const history = useHistory();

	function registerUser({ email, password, confirmPassword }) {
		if (!email) {
			return alert(`please provide an email`);
		}
		if (password !== confirmPassword) {
			return alert(`passwords don't match`);
		}
		let userFound = localStorage.getItem(email);
		console.log(userFound);
		if (userFound) {
			return alert('this user has already been registered');
		}
		// create new user object and save it to local storage
		const newUser = {
			email: email,
			password: password,
			userId: Date.now(),
		};
		// save the users data for accessing later
		localStorage.setItem(email, JSON.stringify(newUser));

		alert('user registered');
		setState(prevValue => {
			return {
				...prevValue,
				isLoggedIn: true,
				userId: newUser.userId,
				userEmail: newUser.email,
			};
		});
		history.push('/home');
	}

	return (
		<form onSubmit={handleSubmit(registerUser)}>
			<div>
				<h2>Register</h2>
				<span>Complete to start adding Note</span>
			</div>
			<br />
			<div>
				<label htmlFor='email'>Email</label>
				<br />
				<input
					type='email'
					name='email'
					id='email'
					required
					{...register('email')}
				/>
			</div>
			<br />
			<div>
				<label htmlFor='password'>Password</label>
				<br />
				<input
					type='password'
					name='password'
					id='password'
					required
					{...register('password')}
				/>
			</div>
			<br />
			<div>
				<label htmlFor='confirm-password'>
					Confirm Password
				</label>
				<br />
				<input
					type='password'
					name='confirm-password'
					id='confirm-password'
					required
					{...register('confirmPassword')}
				/>
			</div>
			<br />
			<div>
				<button type='submit' className='btn '>
					Register
				</button>
			</div>
		</form>
	);
};

export default Register;
