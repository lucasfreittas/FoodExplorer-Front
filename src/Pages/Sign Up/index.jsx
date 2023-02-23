import { Container, Logo, Form } from './styles';

import LogoFoodExplorer from '../../Assets/logo-foodexplorer.svg'
import { Input } from '../../Components/Input Default';
import { Button } from '../../Components/Button';
import { TextButton } from '../../Components/TextButton';


import { useNavigate } from 'react-router-dom';


export function SignUp(){
    const navigate = useNavigate()

    function handleLogin(event){
        event.preventDefault()
        navigate('/')
    };

    return(
        <Container>
            <Logo>
                <img src={LogoFoodExplorer} alt="" />
            </Logo>

            <Form>
                <h1>Crie sua conta</h1>
                <Input
                    label='Seu Nome'
                    placeholder='Exemplo: Maria da Silva'
                    type='text'
                />

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
                    title='Criar Conta'
                    type='submit'
                />

                <TextButton
                    title='Já tenho uma conta'
                    onClick={(e) => handleLogin(e)}
                />

            </Form>
        </Container>
    )
}