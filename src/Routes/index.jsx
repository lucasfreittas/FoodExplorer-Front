import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../Hooks/auth";

import { AuthRoutes } from './auth.routes';
import { AppUser } from './appUser.routes';
import { AppAdmin } from './appAdmin.routes';



export function Routes(){
    const { user } = useAuth();
    return(
        <BrowserRouter>
            { user ? <AppUser/> : <AuthRoutes/>}
        </BrowserRouter>
    )
}