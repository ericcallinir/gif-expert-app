import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory) => {
        
      if ( categories.includes(newCategory) ) return;
        setCategories([newCategory,...categories ]);
    }
    console.log(categories);

  return (
    <>
        {/* Titulo */ }
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
        //setCategories = { setCategories } {/* Aqui se esta mandando la funciona como argumento al componente AddCategory */}
          onNewCategory ={ (value) => onAddCategory(value)}
        />

        {/* Listado de Gif */}
        
       
            { categories.map( category => {
                return <GifGrid key={category} category = {category}/>
            })
            
            }
            
        
            {/* Gif Item */}
    </>
  )
}
