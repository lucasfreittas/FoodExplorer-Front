import { Routes, Route, useNavigate } from 'react-router-dom';
import { MealUser } from '../Pages/Meal User';
import { FavoritesUser } from '../Pages/Favorites User';

export function AppUser(){
    return(
        <Routes>
            <Route path='/meal/:id' element={<MealUser/>} />
            <Route path='/favorites' element={<FavoritesUser/>} />
        </Routes>
    )
} 