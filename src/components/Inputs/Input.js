
import { useRef, useState } from "react";

const Input = ({required=true, children, name='name', placeholder='placeholder', type='text', errorMessage=false, innerRef}) => {

    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState(false);
    const input = useRef();

    const handleFocus = (focused) => {
        if(focused){
            setFocus(true)
        }else{
            if(input.current && !input.current.value.length){
                setFocus(false);   
            }
        }
    }

    const handleChange = (e) => setValue(e.target.value.length);

    return(
        <>
        <label 
            className={`customInput ${focus?'focus':''} ${errorMessage && !value ?'error':''}`} 
            data-type={type} 
            onFocus={ () => handleFocus(true) } 
            onBlur={ () => handleFocus(false) }
            onChange={ handleChange }
            >
            {type !== 'textarea' ? 
                <input name={name} type={type} ref={input}/>
                :
                <textarea ref={input} >   
                </textarea>
            }

            {children && children} 
            <p className={`placeholder ${required ? 'required' : ''}`}><small><b>{placeholder}</b></small></p>
        </label>
            {errorMessage && !value && 
                
                <p className="errorMessage"><small>This field is required</small></p>
            }
        </>
    );
}

export default Input;