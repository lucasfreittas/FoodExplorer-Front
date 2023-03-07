import { Container, Carousel, Card } from './styles';
import { FiPlus, FiMinus, FiHeart, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Button } from '../Button';
import { useRef, useEffect, useState } from 'react';
import { api } from '../../Services/Axios';
import { useNavigate } from 'react-router-dom';

export function MealCarouselUser({title, data, isFilled, ...rest}){
    const carouselRef = useRef(null);
    const navigate = useNavigate();

    const [ userFavorite, setUserFavorite ]  = useState([]);
    const [quantities, setQuantities] = useState(Array(data.length).fill(0));

    const handleMoveLeft = () => {
        carouselRef.current.scrollLeft -= 500;
    };

    const handleMoveRight = () => {
        carouselRef.current.scrollLeft += 500;
    };

    function handleProductDetails(id){
        navigate(`/meal/${id}`)
    };

    async function fetchFavorites(){
        const response = await api.get('/favorites');
        setUserFavorite(response.data)
    };

    function handleIncrement(index) {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
      }
      
      function handleDecrement(index) {
        const newQuantities = [...quantities];
        if (newQuantities[index] > 0) {
          newQuantities[index] -= 1;
        }
        setQuantities(newQuantities);
      }
    

    async function handleToggleFavoritesUser(id){
        const response = await api.get('/favorites');
        const favorites = response.data;

        const isFavorite = favorites.some(favorite => favorite.id === id);

        if(isFavorite){
            await api.delete('/favorites', { data: { product_id: id } });
        } else {
            await api.post('/favorites', {'product_id': id});
        }

        const isFilled= userFavorite.some(favorite => favorite.id === id);
        console.log(isFilled)

        fetchFavorites();
    };

    const baseUrlImg = `${api.defaults.baseURL}/files/`;

    useEffect(() => {
        
        fetchFavorites();
    }, [])
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
                            <FiHeart
                                onClick={() => handleToggleFavoritesUser(data.id)}
                                className={userFavorite.some(favorite => favorite.id === data.id) ? 'filled' : 'unfilled'}
                            />
                            <img
                                src={`${baseUrlImg}${data.photo}`}
                                alt=""
                                onClick={() => handleProductDetails(data.id)}
                            />
                            <h3>{data.name}</h3>
                            <p>{data.description}</p>
                            <h2>R$ {data.price}</h2>
                            <div>
                                <FiMinus onClick={() => handleDecrement(index)} />
                                <span>{quantities[index]}</span>
                                <FiPlus onClick={() => handleIncrement(index)} />
                                <Button title='incluir'/>
                            </div>
                </Card>
                    ))
                }
                
            </Carousel>
        </Container>
    )
}