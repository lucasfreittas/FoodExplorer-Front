import { Container, Product } from './styles';
import { api } from '../../Services/Axios';

export function ProductsList({title, onClick, buttonName, image, price, ...rest}){
    const baseUrlImg = `${api.defaults.baseURL}/files/`;
    
    return(
        <Container {...rest}> 
            <img src={`${baseUrlImg}${image}`} alt="Foto do Produto" />
            <Product>
                <h1>{title}</h1>
                <p>{price}</p>
                <button onClick={onClick}>{buttonName}</button>
            </Product>
        </Container>
    )
}