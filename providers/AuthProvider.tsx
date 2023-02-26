import React, {FunctionComponent as FC, createContext, useState } from "react";

interface IPropsAuthProvider {
	children: JSX.Element
}

interface IAuthContext {
	Auth: boolean,
	setAuth: (boolean) => void
}

export const AuthContext = createContext<IAuthContext | null>(null)

const AuthProvider:FC<IPropsAuthProvider> = ({children}) => {
	const [Auth, setAuth] = useState(false)
	
	return (
		<AuthContext.Provider value={{Auth, setAuth}}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider