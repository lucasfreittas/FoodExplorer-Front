import { Container, Carousel, Card } from './styles';
import { FiPlus, FiMinus, FiHeart, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Button } from '../Button';
import { useRef, useEffect, useState } from 'react';
import { api } from '../../Services/Axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../../Hooks/order';


export function MealCarouselUser({title, data, isFilled, ...rest}){
    const carouselRef = useRef(null);
    const navigate = useNavigate();
    const params = useParams();
    const { handleCart } = useCart();


    const [ userFavorite, setUserFavorite ]  = useState([]);
    const [quantities, setQuantities] = useState((Array(5).fill(0)));

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
      };
      

      function handleAddToCart(product, quantities){
            if(quantities <= 0){
                return
            };
            handleCart(product, quantities)
            setQuantities((Array(5).fill(0)));

        };

    async function handleToggleFavoritesUser(e, id){
        e.stopPropagation();
        const response = await api.get('/favorites');
        const favorites = response.data;

        const isFavorite = favorites.some(favorite => favorite.id === id);

        if(isFavorite){
            await api.delete('/favorites', { data: { product_id: id } });
        } else {
            await api.post('/favorites', {'product_id': id});
        }

        const isFilled= userFavorite.some(favorite => favorite.id === id);
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
                        <Card key={index} onClick={() => navigate(`/meal/${data.id}`)}>
                            <FiHeart
                                onClick={(e) => handleToggleFavoritesUser(e, data.id)}
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
                                <Button
                                    title='incluir'
                                    onClick={() => handleAddToCart(data, quantities[index])}
                                    
                                    />
                            </div>
                </Card>
                    ))
                }
                
            </Carousel>
        </Container>
    )
}