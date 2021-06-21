import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../components/StateProvider';
//styles
import '../styles/RegLog.css';

 function Login() {
	const { setState } = useContext(AppContext);
	const { register, handleSubmit } = useForm();
	const history = useHistory();

	const login = ({ email, password }) => {
		// get the users data
		const user = localStorage.getItem(email);

		if (!user) {
			return alert('An account for this email was not found');
		}

		const userdata = JSON.parse(user);
		console.log(userdata);

		if (password !== userdata.password) {
			return alert('email or password was incorrect');
		}

		alert('login successfull');
		setState(prevstate => {
			return {
				...prevstate,
				isLoggedIn: true,
				userId: userdata.userId,
				userEmail: userdata.email,
			};
		});
		history.push('/noteitems');
	};

	return (
		<form onSubmit={handleSubmit(login)}>
			<div>
				<h2>Login</h2>
				<span>Login to view your Note</span>
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
				<button className='btn' type='submit'>
					Login
				</button>
			</div>
		</form>
	);
}

export default Login
