import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AppContext } from '../components/StateProvider';
// import styles
import '../styles/Register.css';

const Register = () => {
	const { register, handleSubmit } = useForm();
	const context = useContext(AppContext);
	const history = useHistory();

	function registerUser({ email, password, confirmPassword }) {
	// check if the password and confirmPassword match
	if (password !== confirmPassword) {
		return alert(`passwords don't match`);
	}

	// send a request to register a
	// new user
	let newuser = {
		email: email,
		password: password,
	};

	fetch(
		`https://user-manager-three.vercel.app/api/user/register`,
		{
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(newuser), //always stringify objects
		}
	)
		.then(res => res.json())
		.then(result => {
			if (result.error === true) {
				return alert(result.message);
			}

			context.dispatch({
				type: 'LOGIN',
				payload: result.body,
			});

			history.push('/shopping-list');
		})
		.catch(err => {
			console.log('this error occurred', err);
			alert('an error occurred. Please try again later');
		});
};

	return (
		<>
		<div>
			<h2>Register</h2>
			<span>Complete to start adding shopping items</span>
		</div>
		<br />

		<div className='container__child signup__form'>
			<form onSubmit={handleSubmit(registerUser)}>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input
						className='form-control'
						type='text'
						name='email'
						id='email'
						placeholder='james.bond@spectre.com'
						{...register('email', { required: true })}
					/>
				</div>
				<br/>
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input
						className='form-control'
						type='password'
						name='password'
						id='password'
						placeholder='********'
						{...register('password', { required: true })}
					/>
				</div>
				<br/>
				<div className='form-group'>
					<label htmlFor='passwordRepeat'>Repeat Password</label>
					<input
						className='form-control'
						type='password'
						name='passwordRepeat'
						id='passwordRepeat'
						placeholder='********'
						{...register('confirmPassword', { required: true })}
					/>
				</div>
				<br/>
				<div className='m-t-lg'>
					<ul className='list-inline'>
						<li>
							<button className='btn btn--form' type='submit'>
								Register
							</button>
						</li>
						<li>
							<a className='signup__link' href='/login'>
								I already have an account
							</a>
						</li>
					</ul>
				</div>
			</form>
		</div>
	</>
	);
};

export default Register;
