import { useState } from 'react';
import { useAuth } from '../../Hooks/auth';
import { useNavigate } from 'react-router-dom';

import { Container, Logo, Form } from './styles';

import LogoFoodExplorer from '../../Assets/logo-foodexplorer.svg'
import { Input } from '../../Components/Input Default';
import { Button } from '../../Components/Button';
import { TextButton } from '../../Components/TextButton';


export function SignIn(){
    const navigate = useNavigate();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const { signIn } = useAuth()

    function handleSignIn(event){
        event.preventDefault()
        signIn({email, password})
    };

    function handleSignUpPage(event){
        event.preventDefault()
        navigate('/signup')
    };

    return(
        <Container>
            <Logo>
                <img src={LogoFoodExplorer} alt="Logo Food Explorer" />
            </Logo>

            <Form>
                <h1>Faça login</h1>
                <Input
                    label='Email'
                    placeholder='Exemplo: exemplo@exemplo.com.br'
                    type='email'
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    label='Senha'
                    placeholder='No mínimo 6 caracteres'
                    type='password'
                    onChange={e => setPassword(e.target.value)}
                />

                <Button
                    title='Entrar'
                    onClick={handleSignIn}
                />

                <TextButton
                    title='Crie uma conta'
                    onClick={(e) => handleSignUpPage(e)}
                />

            </Form>
        </Container>
    )
}