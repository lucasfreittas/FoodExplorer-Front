import { Container, MenuClosed, MenuOpen } from './styles';
import { useAuth } from '../../Hooks/auth';

import LogoUser from '../../Assets/logo-foodexplorer.svg'
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from 'react-icons/fi'
import { RxExit } from 'react-icons/rx'
import { IoCloseOutline } from "react-icons/io5";

import { Receipt } from '../../Assets/receipt'

import { InputSearch } from '../Input Search';
import { Button } from '../Button';
import { TextButton } from '../TextButton';
import { Footer } from '../Footer';

import { useCart } from '../../Hooks/order';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function HeaderMobile({onSearchChange}){
    const { signOut } = useAuth();
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false);
    const { cart } = useCart();

    function handleSignOut(){
        signOut()
    };

    async function handleSearch(searchValue){   
        onSearchChange(searchValue)
       }

    return(
        <Container>
            {menuOpen ? (
                <MenuOpen>
                    <div className='top-menu'>
                        <Button 
                            icon={IoCloseOutline}
                            onClick={() => setMenuOpen(!menuOpen)}
                        /> 
                        <p>Menu</p>      
                    </div>

                    <div className='menu-list'>
                        <InputSearch
                            placeholder='Busque por pratos ou ingredientes'
                            icon={FiSearch}
                            className='search'
                            onChange={(e) => handleSearch(e.target.value)}    
                        />
                        <button onClick={() => navigate('/history')}>Histórico de Pedidos</button>
                        <button onClick={() => navigate('/favorites')}>Meus Favoritos</button>
                        <button onClick={handleSignOut}>Sair</button>
                    </div>

                    <Footer/>
                    
                </MenuOpen>
            ) : (
                <MenuClosed>
                    <Button 
                        icon={RxHamburgerMenu}
                        onClick={() => setMenuOpen(!menuOpen)}
                    />       

                    <img
                        src={LogoUser}
                        alt="Logo FoodExplorer"
                        onClick={() => navigate('/')}
                    />

                    <div className='cart'>
                        <Button
                            title={`(${cart.length})`}
                            icon={Receipt}
                            onClick={() => navigate('/cart')}
                        />
                    </div>
                </MenuClosed>
            )}

            

            {/* <InputSearch
                placeholder='Busque por pratos ou ingredientes'
                icon={FiSearch}
                className='search'
                onChange={(e) => handleSearch(e.target.value)}    
            /> */}

             {/* <TextButton
                title='Histórico de Pedidos'
                onClick={() => navigate('/history')}
            />

            <Button
                title='Novo Prato'
                className='novoPrato'
                onClick={() => navigate('/newmeal')}
            />

            <TextButton
                icon={RxExit}
                onClick={handleSignOut}
            /> */}

        </Container>
    )
}