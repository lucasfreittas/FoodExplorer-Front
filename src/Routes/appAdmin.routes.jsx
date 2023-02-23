import { Routes, Route, useNavigate } from 'react-router-dom';
import { MealAdmin } from '../Pages/Meal Adm';
import { AddMeal } from '../Pages/Add Meal Adm';

export function AppAdmin(){
    return(
        <Routes>
            <Route path='/meal/:id' element={<MealAdmin/>} />
            <Route path='/newmeal' element={<AddMeal/>} />
        </Routes>
    )
} 