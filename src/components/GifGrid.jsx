import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    /* const [images, setImages ] = useState([]);

    const getImages =  async() => {
        const newImages =  await getGifs( category );
        setImages(newImages)
    }

   useEffect( () => {

    getImages( category );
   }, []); */

   

  return (
    <>
        <h3>{ category }</h3>
        {
            isLoading && ( <h2>Cargando...</h2>)
        }
        

        <div className="card-grid">
            {
                images.map( image => (//Aqui estamos haciendo un List Item de forma dinamica
                    <GifItem 
                        key={ image.id }
                        //{...image}//hace lo mismo que el codigo de abajo solo que lo hace con otra sintaxis "mas sencilla"
                        title={ image.title }
                        url= { image.url }
                    />
                ))
            }
            
        </div>
        
    </>
  )
}
