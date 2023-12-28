import { Container, Content, Description, Ingredients, Order, Main  } from './styles';

import { Header } from '../../Components/Header';
import { HeaderMobile } from '../../Components/Header Mobile';
import { TextButton } from '../../Components/TextButton';
import { Tags } from '../../Components/Tags';
import { Button } from '../../Components/Button';
import { Footer } from '../../Components/Footer';

import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { FiPlus, FiMinus } from 'react-icons/fi'
import SaladaRavanello from '../../Assets/salada-ravanello.png'

import { useEffect, useState } from 'react';
import { api } from '../../Services/Axios';
import { useNavigate, useParams } from 'react-router-dom';

import { useCart } from '../../Hooks/order';

export function MealUser(){
    const navigate = useNavigate();
    const params = useParams();
    const baseUrlImg = `${api.defaults.baseURL}/files/`
    const { handleCart } = useCart();

    const [ data, setData ] = useState({});
    const [ tags, setTags ] = useState([]);
    const [ quantities, setQuantities ] = useState(0)

    async function fetchProduct(){
        const response = await api.get(`/products/${params.id}`);
        setData(response.data.product);
    };

    async function fetchTags(){
        const response = await api.get(`/products/${params.id}`);
        setTags(response.data.tags);
    };

    function handleIncrement(){
        setQuantities(quantities + 1)
    };

    function handleDecrement(){
        setQuantities(quantities - 1)
        if(quantities <= 0){
            setQuantities(0)
        }
    };

    function handleAddToCart(product, quantities){
        if(quantities <= 0){
            return
        };
        handleCart(product, quantities);
        setQuantities(0)
    };

    function handleAddButtonPrice(){
        const total = data.price * quantities;

        if(total < data.price){
            return data.price
        } else {
            return total
        }
    }


    useEffect(() => {
        fetchProduct();
        fetchTags();
    },[])
    return(
        <Container>

            <div className='headerDesktop'>
                <Header/>
            </div> 
            
            <div className='headerMobile'>
               <HeaderMobile />
            </div>

            <Content> 
                <TextButton
                    title='Voltar'
                    icon={MdOutlineKeyboardArrowLeft}
                    onClick={() => navigate('/')}
                />

                <Main>
                    <img
                        src={`${baseUrlImg}${data.photo}`}
                        alt=""
                    />

                    <Description>
                        <h1>{data.name}</h1>

                        <p>
                            {data.description}
                        </p>

                        <Ingredients>

                            {
                                tags && tags.map((tag, index) => (
                                    <Tags
                                        key={index}
                                        title={tag.name}
                                    />
                                ))
                            }
                        </Ingredients>

                        <Order>
                            <div>
                                <FiMinus
                                    size={40}
                                    onClick={() => handleDecrement()}
                                />
                                <h3>{quantities}</h3>
                                <FiPlus 
                                    size={40}
                                    onClick={() => handleIncrement()}
                                />
                            </div>
                            <Button
                                title={`incluir - R$ ${handleAddButtonPrice()}`}
                                onClick={() => handleAddToCart(data, quantities)}
                            />
                        </Order>
                    </Description>
                </Main>
            </Content>

            <Footer/>
        </Container>
    );
};