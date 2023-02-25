import { Container, Carousel, Card } from './styles';
import Salada from '../../Assets/salada-ravanello.png'
import { FiPlus, FiMinus, FiHeart, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Button } from '../Button';
import { useRef } from 'react';

export function MealCarousel({title, ...rest}){
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
                
                <Card>
                    <FiHeart/>
                    <img src={Salada} alt="" />
                    <h3>Salada Ravanello</h3>
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergilim</p>
                    <h2>R$ 49,97</h2>
                    <div>
                        <FiMinus/>
                        <span>01</span>
                        <FiPlus/>
                        <Button title='incluir'/>
                    </div>
                </Card>

                <Card>
                    <FiHeart/>
                    <img src={Salada} alt="" />
                    <h3>Salada Ravanello</h3>
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergilim</p>
                    <h2>R$ 49,97</h2>
                    <div>
                        <FiMinus/>
                        <span>01</span>
                        <FiPlus/>
                        <Button title='incluir'/>
                    </div>
                </Card>

                <Card>
                    <FiHeart/>
                    <img src={Salada} alt="" />
                    <h3>Salada Ravanello</h3>
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergilim</p>
                    <h2>R$ 49,97</h2>
                    <div>
                        <FiMinus/>
                        <span>01</span>
                        <FiPlus/>
                        <Button title='incluir'/>
                    </div>
                </Card>

                <Card>
                    <FiHeart/>
                    <img src={Salada} alt="" />
                    <h3>Salada Ravanello</h3>
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergilim</p>
                    <h2>R$ 49,97</h2>
                    <div>
                        <FiMinus/>
                        <span>01</span>
                        <FiPlus/>
                        <Button title='incluir'/>
                    </div>
                </Card>

                <Card>
                    <FiHeart/>
                    <img src={Salada} alt="" />
                    <h3>Salada Ravanello</h3>
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergilim</p>
                    <h2>R$ 49,97</h2>
                    <div>
                        <FiMinus/>
                        <span>01</span>
                        <FiPlus/>
                        <Button title='incluir'/>
                    </div>
                </Card>

                <Card>
                    <FiHeart/>
                    <img src={Salada} alt="" />
                    <h3>Salada Ravanello</h3>
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergilim</p>
                    <h2>R$ 49,97</h2>
                    <div>
                        <FiMinus/>
                        <span>01</span>
                        <FiPlus/>
                        <Button title='incluir'/>
                    </div>
                </Card>
            </Carousel>
        </Container>
    )
}