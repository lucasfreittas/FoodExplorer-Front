import { Container, Logo, Form } from './styles';

import LogoFoodExplorer from '../../Assets/logo-foodexplorer.svg'
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import { TextButton } from '../../Components/TextButton';

import { useNavigate } from 'react-router-dom';


export function SignIn(){
    const navigate = useNavigate();

    function handleCreateAccount(event){
        event.preventDefault()
        navigate('/signup')
    };

    return(
        <Container>
            <Logo>
                <img src={LogoFoodExplorer} alt="" />
            </Logo>

            <Form>
                <h1>Faça login</h1>
                <Input
                    label='Email'
                    placeholder='Exemplo: exemplo@exemplo.com.br'
                    type='email'
                />

                <Input
                    label='Senha'
                    placeholder='No mínimo 6 caracteres'
                    type='password'
                />

                <Button
                    title='Entrar'
                    type='submit'
                />

                <TextButton
                    title='Crie uma conta'
                    onClick={(e) => handleCreateAccount(e)}
                />

            </Form>
        </Container>
    )
}