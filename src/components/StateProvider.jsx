import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

const initialState = {
	isLoggedIn: false,
	userId: null,
	userEmail: null,
	posts: [],
};

export default function StateProvider({ children }) {
	const [appData, setAppData] = useState(initialState);

	
	return (
		<AppContext.Provider value={{ state: appData, setState: setAppData }}>
			{children}
		</AppContext.Provider>
	);
}
