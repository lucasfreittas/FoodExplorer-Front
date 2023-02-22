import { Routes, Route, useNavigate } from 'react-router-dom';
import { MealUser } from '../Pages/Meal User';

export function AppUser(){
    return(
        <Routes>
            <Route path='/meal/:id' element={<MealUser/>} />
        </Routes>
    )
} 