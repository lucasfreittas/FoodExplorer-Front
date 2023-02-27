import { api } from '../../services/axios';
import { useAuth } from '../../Hooks/auth';
import { useState } from 'react';

import { Container, Logo, Form } from './styles';

import LogoFoodExplorer from '../../Assets/logo-foodexplorer.svg'
import { Input } from '../../Components/Input Default';
import { Button } from '../../Components/Button';
import { TextButton } from '../../Components/TextButton';


import { useNavigate } from 'react-router-dom';


export function SignUp(){
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const navigate = useNavigate()

    function handleCreateUser(){
        if(!name, !email, !password){
            return alert ('Por favor, preencha todos os campos.')
        };

        api.post('/users', {name, email, password})
        .then(() => {
            alert('Usuário criado com sucesso!')
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert ('Não foi possível cadastrar!')
            };
        })
    };

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
                    onChange={e => setName(e.target.value)}
                />

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
                    title='Criar Conta'
                    type='submit'
                    onClick={handleCreateUser}
                />

                <TextButton
                    title='Já tenho uma conta'
                    onClick={(e) => handleLogin(e)}
                />

            </Form>
        </Container>
    )
}