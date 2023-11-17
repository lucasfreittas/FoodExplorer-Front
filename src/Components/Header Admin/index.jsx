import { Container } from './styles';
import { useAuth } from '../../Hooks/auth';

import LogoAdm from '../../Assets/logo-admin.svg'
import { FiSearch } from 'react-icons/fi'
import { RxExit } from 'react-icons/rx'
import { Receipt } from '../../Assets/receipt'

import { InputSearch } from '../Input Search';
import { Button } from '../Button';
import { TextButton } from '../TextButton';

import { useNavigate } from 'react-router-dom';

export function HeaderAdmin({onSearchChange}){
    const { signOut } = useAuth();
    const navigate = useNavigate()

    function handleSignOut(){
        signOut()
    };

    async function handleSearch(searchValue){   
        onSearchChange(searchValue)
       }

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
                onChange={(e) => handleSearch(e.target.value)}    
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
                onClick={handleSignOut}
            />

        </Container>
    )
}