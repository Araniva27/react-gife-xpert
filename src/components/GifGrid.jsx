import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    
    const {images, isLoading} = useFetchGifs( category );          

    return (
        <>
            <h3>{ category }</h3>  
            {
                isLoading && ( <h2>Cargando...</h2> )  //and lógico si no se cumple el verdadero no se evalua la otra condicion                           
            }
            
            <div className = "card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key = { image.id }                             
                            {...image}//Sirve para exparcir las propiedades                        
                        />
                    ))
                }
            </div>         
        </>
    )
}
