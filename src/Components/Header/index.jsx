import { Container } from './styles';

import LogoFE from '../../Assets/logo-foodexplorer.svg'
import { FiSearch } from 'react-icons/fi'
import { RxExit } from 'react-icons/rx'
import { Receipt } from '../../Assets/receipt'

import { InputSearch } from '../Input Search';
import { Button } from '../Button';
import { TextButton } from '../TextButton';

import { useNavigate } from 'react-router-dom';

export function Header(){
    const navigate = useNavigate()

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
                title='Pedidos(0)'
                icon={Receipt}
                onClick={() => navigate('/cart')}
            />

            <TextButton
                icon={RxExit}
            />

        </Container>
    )
}