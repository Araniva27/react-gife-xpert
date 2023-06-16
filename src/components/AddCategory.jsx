import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {
    
    const [inputValue, setInputValue] = useState('');

    //Esta función actualiza constantemente el valor del inputValue
    const onInputChange = ({target}) => {       
        setInputValue( target.value );
    }

    //Esta función almacena en setCategories del padre el elemento del inputValue
    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1 ) return;    
        
        // setCategories(categories => [inputValue,...categories]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type = "text"
                placeholder="Buscar gifs"
                value = { inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
