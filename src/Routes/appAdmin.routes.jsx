import { Routes, Route, useNavigate } from 'react-router-dom';
import { MealAdmin } from '../Pages/Meal Adm';
import { AddMeal } from '../Pages/Add Meal Adm';
import { EditMeal } from '../Pages/Edit Meal Adm';
import { OrderHistoryAdmin } from '../Pages/Order History Adm';
import { HomeAdmin } from '../Pages/Home Adm';

export function AppAdmin(){
    return(
        <Routes>
            <Route path='/' element={<HomeAdmin/>} />
            <Route path='/meal/:id' element={<MealAdmin/>} />
            <Route path='/newmeal' element={<AddMeal/>} />
            <Route path='/editmeal/:id' element={<EditMeal/>} />
            <Route path='/history' element={<OrderHistoryAdmin/>} />
        </Routes>
    )
} 