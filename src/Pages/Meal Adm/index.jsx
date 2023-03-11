import { Container, Content, Description, Ingredients, Order, Main  } from './styles';
import { HeaderAdmin } from '../../Components/Header Admin';
import { TextButton } from '../../Components/TextButton';
import { Tags } from '../../Components/Tags';
import { Button } from '../../Components/Button';
import { Footer } from '../../Components/Footer';

import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { FiPlus, FiMinus } from 'react-icons/fi'
import SaladaRavanello from '../../Assets/salada-ravanello.png'

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../Services/Axios';

export function MealAdmin(){
    const navigate = useNavigate();
    const params = useParams();
    const baseUrlImg = `${api.defaults.baseURL}/files/`

    const [ data, setData ] = useState({});
    const [ tags, setTags ] = useState([]);

    async function fetchProduct(){
        const response = await api.get(`/products/${params.id}`);
        setData(response.data.product);
    };

    async function fetchTags(){
        const response = await api.get(`/products/${params.id}`);
        setTags(response.data.tags);
    };

    useEffect(() => {
        fetchProduct();
        fetchTags();
    },[])
    return(
        <Container>
            <HeaderAdmin/>

            <Content> 
                <TextButton
                    title='Voltar'
                    icon={MdOutlineKeyboardArrowLeft}
                    onClick={() => navigate(-1)}
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
                            
                            <Button
                                title='Editar Prato'
                                onClick={() => navigate(`/editmeal/${data.id}`)}
                            />

                        </Order>
                    </Description>
                </Main>
            </Content>

            <Footer/>
        </Container>
    );
};