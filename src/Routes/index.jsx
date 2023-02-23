import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from './auth.routes';
import { AppUser } from './appUser.routes';
import { AppAdmin } from './appAdmin.routes';

export function Routes(){
    return(
        <BrowserRouter>
            {<AppAdmin/>}
        </BrowserRouter>
    )
}