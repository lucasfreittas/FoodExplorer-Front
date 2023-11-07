import { useAuth } from '../../Hooks/auth';

import { Container } from './styles';

import LogoFE from '../../Assets/logo-foodexplorer.svg'
import { FiSearch } from 'react-icons/fi'
import { RxExit } from 'react-icons/rx'
import { Receipt } from '../../Assets/receipt'

import { InputSearch } from '../Input Search';
import { Button } from '../Button';
import { TextButton } from '../TextButton';

import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Hooks/order';

import { api } from '../../Services/Axios'; 

export function Header(){
    const { signOut } = useAuth()
    const navigate = useNavigate()

    const { cart } = useCart();

    function handleSignOut(){
        signOut();
    };

    async function handleSearch(){

        const product = {
            tags: 'Café'
        }
        const response = await api.get('/products', { params: product });
   
        console.log(response.data)
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
                onClick={handleSearch}
               
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