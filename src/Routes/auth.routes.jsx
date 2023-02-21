import { Routes, Route, useNavigate } from 'react-router-dom';
import { SignIn } from '../Pages/Sign In';
import { SignUp } from '../Pages/Sign Up';

export function AuthRoutes(){
    return(
        <Routes>
            <Route path='/' element={<SignIn/>} />
            <Route path='/signup' element={<SignUp/>} />
        </Routes>
    )
}