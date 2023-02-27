import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../Services/Axios'

export const AuthContext = createContext({});

export function AuthProvider({ children }){
    const [data, setData] = useState({});

    async function signIn({ email, password }){

        try{
        const response = await api.post('/sessions', { email, password })
        const { user, token } = response.data;

        localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
        localStorage.setItem("@foodexplorer:token", token);

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setData({user, token});

        } catch (error){
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert("Não foi possível fazer login")
            }
        };
    };

    return(
        <AuthContext.Provider value={{
            signIn,
            user: data.user
        }}>

            {children}
        </AuthContext.Provider>
    )
};

export function useAuth(){
    const context = useContext(AuthContext);

    return context;
}
