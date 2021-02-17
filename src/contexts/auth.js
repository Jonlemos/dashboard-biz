import React, {createContext, useState} from 'react'

export const AuthContext = createContext()

const Auth = ({children}) =>{
    const [userInfo, setUserInfo] = useState({
        isUserLoggedInd: false, 
        user: null,
    })


    return(
        <AuthContext.Provider
            value={{
                userInfo,
                setUserInfo,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default Auth