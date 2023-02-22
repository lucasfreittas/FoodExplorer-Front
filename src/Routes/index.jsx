import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from './auth.routes';
import { AppUser } from './appUser.routes';

export function Routes(){
    return(
        <BrowserRouter>
            {<AppUser/>}
        </BrowserRouter>
    )
}