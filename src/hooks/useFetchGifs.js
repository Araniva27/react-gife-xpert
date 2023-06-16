import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//Un hook es una función que regresa algo
export const useFetchGifs = ( category ) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );
    

    const getImages = async() => {
        const newImages =  await getGifs( category );
        setImages( newImages );
    }

    //Se ejecuta la función, cuando se cumpla la condición entre [], si esta vacio se ejecuta cuando se renderiza el componente
    useEffect( ()=>{
        getImages();
        setIsLoading(false);
    }, [])

    return {
        //images: images,
        images, //es lo mismo que la linea 23 porque apunta a lo mismo
        isLoading
    }
}
