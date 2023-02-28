import { Container, Form, Content } from './styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../Services/Axios';

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

export function AddMeal(){
    const navigate = useNavigate()
    const [ name, setName ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ price, setPrice ] = useState(0.00);
    const [ description, setDescription ] = useState('');

    const [ tags, setTags ] = useState([]);
    const [ newTag, setNewTag ] = useState('');

 
    const [ photoFile, setPhotoFile ] = useState(null);
    const [ photoImg, setPhotoImg ] = useState(null)
    const [ imgName, setImgName] = useState('Upload da imagem')


    async function handleCreateMeal(event){
        event.preventDefault()

        const fileUploadForm = new FormData();
        fileUploadForm.append('photo', photoFile);

        const newProduct = {
            name: name,
            description: description,
            price: price,
            category: category,
            tags: tags,
        };
        
       const response = await api.post('/products', newProduct)
       await api.patch(`/products/photo/${response.data.product_id}`, fileUploadForm)

    };

   function handlePhoto(event){
        const file = event.target.files[0];
        setPhotoFile(file);

        const photoPreview = URL.createObjectURL(file);
        setPhotoImg(photoPreview);

        setImgName(file.name)
     
   };

    function handleAddTag(event){
        event.preventDefault()
        setTags(prevState => [...prevState, newTag])
        setNewTag('')
    };

    return(
        <Container>
            <HeaderAdmin/>
            <Content>
                <TextButton
                        className='txtbtn'
                        title='Voltar'
                        icon={MdOutlineKeyboardArrowLeft}
                        onClick={() => navigate(-1)}
                />
                <h1>Adicionar Prato</h1>

                <Form>
                    <div className='row1' >
                        <InputFile
                            label='Imagem do prato'
                            title={imgName}
                            icon={FiUpload}
                            onChange={handlePhoto}
                        />

                        <Input
                            label='Nome'
                            type='text'
                            onChange={e => setName(e.target.value)}
                        />

                        <InputSelect
                            label='Categoria'
                            placeholder='Selecione uma categoria'
                            options={[
                                {label: 'Refeições', value: 'Refeições'},
                                {label: 'Sobremesas', value: 'Sobremesas'},
                                {label: 'Bebidas', value: 'Bebidas'},
                            ]}
                            onChange={e => setCategory(e.target.value)}
                            
                        />
                    </div>
                    
                    <div className='row2'>
                        <InputTags
                            label='Ingredientes'
                            tags={tags}
                            onChange={e => setNewTag(e.target.value)}
                            onClick={handleAddTag}
                            setTags={setTags}
                            value={newTag}
                        />

                        <Input
                            label='Preço'
                            type='number'
                            min='0.00'
                            max='10000000.00'
                            step='0.01'
                            placeholder='R$ 0,00'
                            money
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>

                    <div>
                        <TextArea
                            label='Descrição'
                            placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>

                    <div className='row3'>    
                        <Button
                            title='Salvar Alterações'
                            onClick={handleCreateMeal}
                        />
                    </div>    
                    
                </Form>
            </Content>

            <Footer/>
        </Container>
    )
}