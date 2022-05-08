import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Category = () => {
  return (
    <List>
      <SLink to={'/cuisine/Italian'}>
          <FaPizzaSlice />
          <h3>Italian</h3>
      </SLink>
      <SLink to={'/cuisine/American'}>
          <FaHamburger />
          <h3>American</h3>
      </SLink>
      <SLink to={'/cuisine/Thai'}>
          <GiNoodles />
          <h3>Thai</h3>
      </SLink>
      <SLink to={'/cuisine/Japanese'}>
          <GiChopsticks />
          <h3>Japanese</h3>
      </SLink>
    </List>
  )
}

const List = styled.div`
display:flex;
justify-content: center;
margin: 2rem 0`

const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center:
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width:6rem;
height: 6rem !important;
// cursor: pointer;

h3{
    color: white;
    font-size: 0.8rem;
}
svg{
    color: white;
    font-size: 1.5rem;
}
`

export default Category

