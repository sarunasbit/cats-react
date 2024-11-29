import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const SelectOptions = ({breeds, onSelect})=> {
    const [selected, setSelected] = useState('');

    const handleChange=(e) => {
        setSelected(e.target.value)
    }
    
    const handleButtonClick=()=> {
        onSelect(selected)
    }
    return(
        <>
        <div className="row d-flex mt-3 justify-content-center">
           <div className="col-6 d-flex">
          <Form.Select onChange={handleChange} value={selected}>
                <option value="">Open this select menu</option>
                {breeds.map((breed)=>(
                    <option key={breed.id} value={breed.id}>{breed.name}</option>
                ))}
          </Form.Select>
            <Button onClick={handleButtonClick} variant="outline-secondary" id="button-addon2">
               Select
            </Button>
           </div>
           <h1></h1>
        </div>
        </>
    );
}

export default SelectOptions