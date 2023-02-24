import { Routes, Route, useNavigate } from 'react-router-dom';
import { MealUser } from '../Pages/Meal User';
import { FavoritesUser } from '../Pages/Favorites User';
import { OrderHistoryUser } from '../Pages/Order History User';
import { ShoppingCartUser } from '../Pages/Shopping Cart User';

export function AppUser(){
    return(
        <Routes>
            <Route path='/meal/:id' element={<MealUser/>} />
            <Route path='/favorites' element={<FavoritesUser/>} />
            <Route path='/history' element={<OrderHistoryUser/>} />
            <Route path='/cart' element={<ShoppingCartUser/>} />
        </Routes>
    )
} 