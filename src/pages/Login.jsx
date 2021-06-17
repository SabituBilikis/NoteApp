import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../components/StateProvider';

export default function Login() {

	const context = useContext(AppContext);
	console.log(context);

	const { register, handleSubmit } = useForm();
	const history = useHistory();

	const login = ({ email, password }) => {
		// create data to be sent to the api for validation
		let userdata = {
			email: email,
			password: password,
		};

		fetch(
			'https://user-manager-three.vercel.app/api/user/login',
			{
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(userdata),
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

				history.push('/home');
			})
			.catch(err => {
				alert(
					'Unable to complete request. Please try again after some time'
				);
				console.log({ err });
			});
	};

	return (
		<>
			<div>
				<h2>Login</h2>
				<span>Login to view your shopping list</span>
			</div>
			<br />
			
			<form onSubmit={handleSubmit(login)}>
				<div>
					<input
						type='text'
						placeholder='email'
						required
						{...register('email')}
					/>
				</div>
				<br/>
				<div>
					<input
						type='password'
						placeholder='password'
						required
						{...register('password')}
					/>
				</div>
				<br/>
				<div>
					<button type='submit' value='Login'>Login</button>
				</div>
			</form>
		</>
	);
}

