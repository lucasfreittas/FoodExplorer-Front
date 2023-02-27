import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../Hooks/auth";

import { AuthRoutes } from './auth.routes';
import { AppUser } from './appUser.routes';
import { AppAdmin } from './appAdmin.routes';



export function Routes(){
    const { user } = useAuth();

    function HandleTypeOfUser(){
        if(user.admin){
            return <AppAdmin/>
        } else {
            return <AppUser/>
        }
     
    }

    return(
        <BrowserRouter>
            { !user ? <AuthRoutes/> : <HandleTypeOfUser/> }
        </BrowserRouter>
    )
}