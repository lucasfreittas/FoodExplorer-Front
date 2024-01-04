import { useAuth } from '../../Hooks/auth';

import { Container } from './styles';

import LogoFE from '../../assets/logo-foodexplorer.svg'
import { FiSearch } from 'react-icons/fi'
import { RxExit } from 'react-icons/rx'
import { Receipt } from '../../assets/receipt'

import { InputSearch } from '../Input Search';
import { Button } from '../Button';
import { TextButton } from '../TextButton';

import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Hooks/order';




export function Header({onSearchChange}){
    const { signOut } = useAuth()
    const navigate = useNavigate()
    const { cart } = useCart();


    function handleSignOut(){
        signOut();
    };

    async function handleSearch(searchValue){   
       onSearchChange(searchValue)
      }

    return(
        <Container>
            <img
                src={LogoFE}
                alt="Logo FoodExplorer"
                onClick={() => navigate('/')}
            />

            <InputSearch
                placeholder='Busque por pratos ou ingredientes'
                icon={FiSearch}
                className='search' 
                onChange={(e) => handleSearch(e.target.value)}               
            />

            <TextButton
                title='Meus Favoritos'
                onClick={() => navigate('/favorites')}
            />

             <TextButton
                title='Histórico de Pedidos'
                onClick={() => navigate('/history')}
            />

            <Button
                title={`Pedidos (${cart.length})`}
                icon={Receipt}
                onClick={() => navigate('/cart')}
            />

            <TextButton
                icon={RxExit}
                onClick={handleSignOut}
            />

        </Container>
    )
}