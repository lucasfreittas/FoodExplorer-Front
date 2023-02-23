import { Container, InnerTag, Wraper } from './styles';
import { FiX, FiPlus } from 'react-icons/fi'


export function InputTags({ tags, onClick, label, ...rest}){
    return(
        <Container>
            <label>{label}</label>
            <Wraper>
                {
                    tags && tags.map((tag, index) => (
                        <InnerTag key={index}>
                            {tag}
                            <button>
                                <FiX/>
                            </button>
                            
                        </InnerTag>
                    ))
                }

                <InnerTag isNew>
                    Adicionar
                    <button>
                        <FiPlus/>
                    </button>
                    
                </InnerTag>
            </Wraper>
        </Container>
    )
}