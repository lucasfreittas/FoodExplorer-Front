import { Container, Product } from './styles';
import SaladaRavanello from '../../Assets/salada-ravanello.png'

export function ProductsList({title, buttonName,...rest}){
    return(
        <Container {...rest}> 
            <img src={SaladaRavanello} alt="Foto do Produto" />
            <Product>
                <h1>{title}</h1>
                <button>{buttonName}</button>
            </Product>
        </Container>
    )
}