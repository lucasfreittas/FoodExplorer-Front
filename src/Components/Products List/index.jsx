import { Container, Product } from './styles';

export function ProductsList({title, buttonName, image, price, ...rest}){
    return(
        <Container {...rest}> 
            <img src={image} alt="Foto do Produto" />
            <Product>
                <h1>{title}</h1>
                <p>{price}</p>
                <button>{buttonName}</button>
            </Product>
        </Container>
    )
}