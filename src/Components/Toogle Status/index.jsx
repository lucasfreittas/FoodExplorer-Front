import { useState } from 'react';
import { Container } from './styles';
import { RxDotFilled } from 'react-icons/rx';
import { FiChevronDown } from 'react-icons/fi'
import { api } from '../../Services/Axios';


export function ToggleStatus({status, ordersId, rdOnly, ...rest}) {
    const [selectedOption, setSelectedOption] = useState(status);
  
    async function handleOptionChange(event){
        const newOption = event.target.value;
        setSelectedOption(newOption);
        
        const updateStatus = {
          "status": newOption
        };

        await api.put(`/orders/${ordersId}`, updateStatus)
      };

    function handleColor(){
        if(selectedOption === 'Pendente'){
            return '#AB222E';
        } else if (selectedOption === 'Preparando'){
            return '#FBA94C'
        } else if (selectedOption === 'Entregue'){
            return '#04D361'
        } else if (selectedOption === 'Cancelado') {
            return '#707070'
        }
    };


  
    return(
      <Container rdOnly={rdOnly}>
        <RxDotFilled color={handleColor()}/>
        <select name="Status" id="Status" value={selectedOption} disabled={rdOnly} onChange={e => handleOptionChange(e)}>
          <option value="Pendente">Pendente</option>
          <option value="Preparando">Preparando</option>
          <option value="Entregue">Entregue</option>
          <option value="Cancelado">Cancelado</option>
        </select>
        <FiChevronDown className='selectArrow' rdOnly={rdOnly}/>
      </Container>
    )
  }