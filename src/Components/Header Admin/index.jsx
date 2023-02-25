import { Container } from './styles';

import LogoAdm from '../../Assets/logo-admin.svg'
import { FiSearch } from 'react-icons/fi'
import { RxExit } from 'react-icons/rx'
import { Receipt } from '../../Assets/receipt'

import { InputSearch } from '../Input Search';
import { Button } from '../Button';
import { TextButton } from '../TextButton';

import { useNavigate } from 'react-router-dom';

export function HeaderAdmin(){
    const navigate = useNavigate()

    return(
        <Container>
            <img
                src={LogoAdm}
                alt="Logo FoodExplorer"
                onClick={() => navigate('/')}
            />

            <InputSearch
                placeholder='Busque por pratos ou ingredientes'
                icon={FiSearch}
                className='search'    
            />

             <TextButton
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
            />

        </Container>
    )
}