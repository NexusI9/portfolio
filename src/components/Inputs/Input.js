
import { useRef, useState } from "react";

const Input = ({required=true, children, name='name', placeholder='placeholder', type='text'}) => {

    const [focus, setFocus] = useState(false);
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
    return(
        <label 
            className={`customInput ${focus ? 'focus' : ''}`} 
            data-type={type} 
            onFocus={ () => handleFocus(true) } 
            onBlur={ () => handleFocus(false) }
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
    );
}

export default Input;