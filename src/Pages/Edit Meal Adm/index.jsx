import { Container, Form, Content } from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
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

export function EditMeal(){
    const navigate = useNavigate();
    const params = useParams();

    const [ productData, setProductData ] = useState({});
    const [ tagData, setTagData ] = useState([]);

    const [ name, setName ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ price, setPrice ] = useState(0.00);
    const [ description, setDescription ] = useState('');

    const [ tags, setTags ] = useState([]);
    const [ newTag, setNewTag ] = useState('');
 
    const [ photoFile, setPhotoFile ] = useState(null);
    const [ photoImg, setPhotoImg ] = useState(null);
    const [ imgName, setImgName] = useState('Upload da imagem');


    async function handleUpdateMeal(event){
        event.preventDefault();

        if(photoFile !== null){
            const fileUploadForm = new FormData();
            fileUploadForm.append('photo', photoFile);

            try{

                await api.patch(`/products/photo/${params.id}`, fileUploadForm)
                
            }
            catch (error){
                if(error.response){
                    alert(error.response.data.message);
                } else {
                    alert ('Não foi possível atualizar')
                }
            };
        };
    
        const newProduct = {
            name: name,
            description: description,
            price: price,
            category: category,
            tags: tags,
        };
    
        try {
            await api.put(`/products/${params.id}`, newProduct)
            alert ('Produto atualizado com sucesso!')
            navigate('/')
        } catch (error){
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert ('Não foi possível atualizar')
            }
        };

        window.location.reload()
    };

    async function handleDeleteMeal(event){
        event.preventDefault()
        const product_id = params.id
        console.log(product_id)
        try{
            await api.delete(`/products/${product_id}`)
            alert ('Produto foi deletado com sucesso!')
            navigate('/')
        } catch (error){
            if(error.response){
                alert(error.response.data.message);
            } else{
                alert('Não foi possível atualizar')
            }
        }
    }

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


      useEffect(() => {
        async function fetchProductData() {
            try {
                const productResponse = await api.get(`/products/${params.id}`);
                setProductData(productResponse.data.product);
      
                const tagResponse = await api.get(`/products/${params.id}`);
                const loadTags = tagResponse.data.tags;
    
                setName(productResponse.data.product.name);
                setDescription(productResponse.data.product.description);
                setPrice(productResponse.data.product.price);
                setImgName(productResponse.data.product.photo.split(' - ')[1]);

                const readTags = loadTags.map(tag => tag.name);
                setTags(readTags)

            } catch (error) {
                console.log(error);
            }
        }
    
        fetchProductData()
    }, []);


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
                <h1>Editar Prato</h1>

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
                            placeholder={productData.name}
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
                            placeholder={`R$ ${productData.price}`}
                            money
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>

                    <div>
                        <TextArea
                            label='Descrição'
                            placeholder={productData.description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>

                    <div className='row3'>
                         <Button
                            title='Excluir Prato'
                            onClick={handleDeleteMeal}
                            second
                        />

                        <Button
                            title='Salvar Alterações'
                            onClick={handleUpdateMeal}
                        />
                    </div>    
                    
                </Form>
            </Content>

            <Footer/>
        </Container>
    )
}