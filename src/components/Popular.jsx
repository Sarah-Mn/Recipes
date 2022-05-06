import axios from "axios"
import { useEffect, useState } from "react";

const Popular = () => {

    const [popular, setPopular] = useState([]);

    const getPopular = async()=>{
    await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
    .then(res => {
    setPopular(res.data.recipes);
  });

    }

    

    useEffect(()=>{
        getPopular()
    }, [])

  return (
    <div>
      {popular.map((recipe)=>{
          return(
              <div key={recipe.name}>{recipe.name}</div>
          )

      })}
    </div>
  )
}

export default Popular
