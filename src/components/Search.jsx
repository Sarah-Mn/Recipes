import styled from 'styled-components';
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const [input, setInput] = useState('');
    const Navigate = useNavigate();

    const sumbitHandler = (e) =>{
        e.preventDefault();
        Navigate(`/searched/${input}`);
    }

  return (
    <FormStyled onSubmit={sumbitHandler}>
        <div>
            <FaSearch />
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
        </div>
      
    </FormStyled>
  )
}

const FormStyled = styled.form`
margin: 0 20rem;


div{
    position: relative;
    width:100%;
}

input{
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    margin: 2rem 0;
}
svg{
    position: absolute;
    top:50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
}
`

export default Search
