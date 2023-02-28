import { Container, InnerTag, Wraper } from './styles';
import { FiX, FiPlus } from 'react-icons/fi'


export function InputTags({ tags, onClick, label, setTags, ...rest}){

    function removeTag(event, tagToDelete){
        event.preventDefault()
        setTags(prevState => prevState.filter(allTags => allTags !== tagToDelete))

    };

    return(
        <Container>
            <label>{label}</label>
            <Wraper>
                {
                    tags && tags.map((tag, index) => (
                        <InnerTag key={index}>
                            {tag}
                            <button onClick={(e) => removeTag(e, tag)}>
                                <FiX/>
                            </button>
                            
                        </InnerTag>
                    ))
                }

                <InnerTag  isNew>
                    <input {...rest} type="text" placeholder='Adicionar' />
                    <button onClick={onClick}><FiPlus/></button>
                    
                </InnerTag>
            </Wraper>
        </Container>
    )
}