import { Container, Form, Content } from './styles';

import { HeaderAdmin } from '../../Components/Header Admin';
import { TextButton } from '../../Components/TextButton';
import { Input } from '../../Components/Input Default';
import { InputSelect } from '../../Components/Input Select';
import { InputTags } from '../../Components/Input Tags';
import { InputFile } from '../../Components/Input File';
import { TextArea } from '../../Components/Text Area';
import { Button } from '../../Components/Button';
import { Footer } from '../../Components/Footer';
import { FiUpload } from 'react-icons/fi';

import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

export function EditMeal(){
    return(
        <Container>
            <HeaderAdmin/>
            <Content>
                <TextButton
                        className='txtbtn'
                        title='Voltar'
                        icon={MdOutlineKeyboardArrowLeft}
                />
                <h1>Adicionar Prato</h1>

                <Form>
                    <div className='row1' >
                        <InputFile
                            label='Imagem do prato'
                            title='Selecione Imagem'
                            icon={FiUpload}
                            
                            
                        />

                        <Input
                            label='Nome'
                            type='text'
                        />

                        <InputSelect
                            label='Categoria'
                            options={[
                                {label: 'Opção 1', value: 'Opção 1'},
                                {label: 'Opção 2', value: 'Opção 2'},
                                {label: 'Opção 3', value: 'Opção 3'},
                            ]}
                        />
                    </div>
                    
                    <div className='row2'>
                        <InputTags
                            label='Ingredientes'
                            tags={['Pão naan', 'Cebola']}
                        />

                        <Input
                            label='Preço'
                            type='number'
                            min='0.00'
                            max='10000000.00'
                            step='0.01'
                            placeholder='R$ 0,00'
                            money
                        />
                    </div>

                    <div>
                        <TextArea
                            label='Descrição'
                            placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                        />
                    </div>

                    <div className='row3'>
                        <Button
                            title='Excluir Prato'
                            second={true}
                        />

                        <Button
                            title='Salvar Alterações'
                        />
                        
                    </div>    
                    
                </Form>
            </Content>

            <Footer/>
        </Container>
    )
}