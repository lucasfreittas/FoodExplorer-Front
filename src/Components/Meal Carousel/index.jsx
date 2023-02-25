import { Container, Carousel, Card } from './styles';
import Salada from '../../Assets/salada-ravanello.png'
import { FiPlus, FiMinus, FiHeart, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Button } from '../Button';
import { useRef } from 'react';

export function MealCarousel({title, data, ...rest}){
    const carouselRef = useRef(null);

    const handleMoveLeft = () => {
        carouselRef.current.scrollLeft -= 500;
    };

    const handleMoveRight = () => {
        carouselRef.current.scrollLeft += 500;
    };

    return(
        <Container>
            <h1>{title}</h1>
            <div className='left'>
            <button onClick={handleMoveLeft}><FiChevronLeft className='leftArrow'/></button>
            </div>
            <div className='right'>
            <button onClick={handleMoveRight}><FiChevronRight className='rightArrow'/></button>
            </div>
            <Carousel ref={carouselRef}>
                {
                    data.map((data, index) => (
                        <Card key={index}>
                            <FiHeart/>
                            <img src={data.image} alt="" />
                            <h3>{data.name}</h3>
                            <p>{data.description}</p>
                            <h2>{data.price}</h2>
                            <div>
                                <FiMinus/>
                                <span>01</span>
                                <FiPlus/>
                                <Button title='incluir'/>
                            </div>
                </Card>
                    ))
                }
                
            </Carousel>
        </Container>
    )
}