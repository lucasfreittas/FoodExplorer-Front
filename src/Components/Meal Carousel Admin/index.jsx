import { Container, Carousel, Card } from './styles';
import Salada from '../../Assets/salada-ravanello.png'
import { FiPlus, FiMinus, FiEdit, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Button } from '../Button';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export function MealCarouselAdmin({title, data, ...rest}){
    const navigate = useNavigate()

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
                            <FiEdit onClick={() => navigate('/editmeal/1')}/>
                            <img src={data.image} alt="" />
                            <h3>{data.name}</h3>
                            <p>{data.description}</p>
                            <h2>{data.price}</h2>
                            <div>
                                <FiMinus/>
                                <span>01</span>
                                <FiPlus/>
                                <Button title='incluir' disabled/>
                            </div>
                </Card>
                    ))
                }
                
            </Carousel>
        </Container>
    )
}