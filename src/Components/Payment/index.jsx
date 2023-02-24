import { useState } from 'react';
import { Container, Buttons, Content, Credit } from './styles';
import QRCode from '../../Assets/qrcode.svg'
import { Input } from '../../Components/Input Default';
import { Button } from '../Button';
import { Receipt } from '../../Assets/receipt';

export function PaymentCard(){
    const [content, SetContent] = useState('Pix');

    const pixContent = <img src={QRCode} alt="" />
    const creditContent = 
        <Credit>
            <Input label='Número do Cartão' placeholder='0000 0000 0000 0000' type='number'/>
            <div className='wrapper'>
                <Input label='Validade' placeholder='04/25' type='text' />
                <Input label='CVC' placeholder='000' type='number'/>
            </div>
            <Button title='Finalizar o pagamento' icon={Receipt}/>
        </Credit>
    function handleContent(){
        if (content === 'Pix'){
            return pixContent
        } else if (content === 'Credito'){
            return creditContent
        }
    };
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