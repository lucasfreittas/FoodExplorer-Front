import { useState } from 'react';
import { Container } from './styles';
import { RxDotFilled } from 'react-icons/rx';
import { FiChevronDown } from 'react-icons/fi'


export function ToggleStatus() {
    const [selectedOption, setSelectedOption] = useState('Pendente');
  
    function handleOptionChange(event){
        const newOption = event.target.value;
        setSelectedOption(newOption);
    }

    function handleColor(){
        if(selectedOption === 'Pendente'){
            return '#AB222E';
        } else if (selectedOption === 'Preparando'){
            return '#FBA94C'
        } else {
            return '#04D361'
        }
    }
  
    return(
      <Container>
        <RxDotFilled color={handleColor()}/>
        <select name="Status" id="Status" value={selectedOption} onChange={e => handleOptionChange(e)}>
          <option value="Pendente">Pendente</option>
          <option value="Preparando">Preparando</option>
          <option value="Entregue">Entregue</option>
        </select>
        <FiChevronDown />
      </Container>
    )
  }