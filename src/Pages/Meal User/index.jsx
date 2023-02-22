import { Container, Content, Description, Ingredients, Order, Main  } from './styles';
import { Header } from '../../Components/Header';
import { TextButton } from '../../Components/TextButton';
import { Tags } from '../../Components/Tags';
import { Button } from '../../Components/Button';
import { Footer } from '../../Components/Footer';

import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { FiPlus, FiMinus } from 'react-icons/fi'
import SaladaRavanello from '../../Assets/salada-ravanello.png'

export function MealUser(){
    return(
        <Container>
            <Header/>

            <Content> 
                <TextButton
                    title='Voltar'
                    icon={MdOutlineKeyboardArrowLeft}
                />

                <Main>
                    <img
                        src={SaladaRavanello}
                        alt=""
                    />

                    <Description>
                        <h1>Salada Ravanello</h1>

                        <p>
                            Rabanetes, folhas verdes 
                            e molho agridoce salpicados com gergelim. 
                            O pão naan dá um toque especial.
                        </p>

                        <Ingredients>
                            <Tags
                                title='alface'
                            />

                            <Tags
                                title='cebola'
                            />

                            <Tags
                                title='pão naan'
                            />

                            <Tags
                                title='pepino'
                            />

                            <Tags
                                title='rabanete'
                            />

                            <Tags
                                title='tomate'
                            />

                        </Ingredients>

                        <Order>
                            <div>
                                <FiMinus size={40}/>
                                <h3>01</h3>
                                <FiPlus size={40}/>
                            </div>
                            <Button
                                title='incluir - R$ 25,00'
                            />
                        </Order>
                    </Description>
                </Main>
            </Content>

            <Footer/>
        </Container>
    );
};