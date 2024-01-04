import { useState, useEffect } from 'react';
import { Container, Buttons, Content, Credit } from './styles';
import QRCode from '../../assets/qrcode.svg'
import { Input } from '../../Components/Input Default';
import { Button } from '../Button';
import { Receipt } from '../../assets/receipt';
import { useCart } from '../../Hooks/order';
import { api } from '../../Services/Axios';
import { useNavigate } from 'react-router-dom';

export function PaymentCard(){
    const navigate = useNavigate();

    const [content, SetContent] = useState('Pix');
    const { cart, deleteFromCart } = useCart();
    const [ total, setTotal ] = useState();
    
    function handleTotal(){
        let amount = 0
        cart.map(product => {
            amount = product.quantities * product.price + amount
        });

        setTotal(amount)
    };
    
    async function makeOrder(){
        const description = cart.map(product => product.name)
        const newOrder = {
            description,
            total
        };

        try {
            await api.post('/orders', newOrder)
            alert ('Pedido feito com sucesso!')
            navigate('/')
        } catch (error){
            if(error.response){
                alert(error.response.data.message);
            } else {
                navigate('/')
            }
        };
    };

    const pixContent = 
        <Credit>
        <div className='pixWrapper'>
            <img src={QRCode} alt="" />
            <Button title='Finalizar o pagamento' icon={Receipt} onClick={() => makeOrder()}/>
        </div>
        </Credit>
        
    const creditContent = 
        <Credit>
            <Input label='Número do Cartão' placeholder='0000 0000 0000 0000' type='number'/>
            <div className='wrapper'>
                <Input label='Validade' placeholder='04/25' type='text' />
                <Input label='CVC' placeholder='000' type='number'/>
            </div>
            <Button title='Finalizar o pagamento' icon={Receipt} onClick={() => makeOrder()}/>
        </Credit>
    function handleContent(){
        if (content === 'Pix'){
            return pixContent
        } else if (content === 'Credito'){
            return creditContent
        }
    };

    useEffect(() => {
        handleTotal()
    },[])
    return(
        <Container>
            <Buttons>
                <button onClick={() => SetContent('Pix')}>Pix</button>
                <button onClick={() => SetContent('Credito')}>Crédito</button>
            </Buttons>
            <Content>
                {handleContent()}
            </Content>
        </Container>
    )
}