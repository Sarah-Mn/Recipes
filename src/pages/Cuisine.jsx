import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import axios from "axios"



const Cuisine = () => {

    let params = useParams()
    const [cuisine, setCuisine] = useState([]);

    const getCuisine = async()=>{

        // const check = localStorage.getItem("popular");
  
        // if(check){
        //   setPopular(JSON.parse(check));
        // } else {
          await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${params.type}`)
          .then(res => {
            // localStorage.setItem("popular", JSON.stringify(res.data.recipes))
            setCuisine(res.data.results);
        });
        
  
      
  
      }

      useEffect(()=>{
        getCuisine()
    }, [params.type]);

  return (
    <Grid>
        {cuisine.map((recipe)=>{
          return(
              <Card key={recipe.id}>
                <img src={recipe.image} alt={recipe.title} />
                <h4>{recipe.title}</h4>
              </Card>
          )

      })}
      
    </Grid>
  )
}

const Grid = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
`

const Card = styled.div`
img{
    width:100%;
    border-radius: 2rem;
}

a{
    text-decoration: none;
}
h4{
    text-align: center;
    padding: 1rem;
}
`

export default Cuisine
