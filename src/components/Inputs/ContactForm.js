import { useEffect, useRef, useState, Fragment } from "react";
import Input from "./Input";
import Link from "next/link";


const ContactForm = ({inputs=[], sendTo='/index.php'}) => {
    

    const [fieldsError, setFieldsError] = useState([]);
    const [validForm, setValidForm] = useState(false);
    const [sent, setSent] = useState(false);
    const fields = useRef([]);


    const sendMessage = (e) => {

        e.preventDefault();
        let emptyField = false;
        let fieldArray = fieldsError; 
        let data = {};

        fields.current.forEach( (input,i) => {
            if(!input.value){ 
                emptyField = true; 
                fieldArray[i] = true;
                setFieldsError([...fieldArray]);
            }

            data[input.name] = input.value;
        });

        if(!emptyField){ setValidForm(data); }

        
    }

    useEffect( () => {
        setFieldsError( fields.current.map( _ => 0) );
    },[fields.current]);

    useEffect(() => {

        if(validForm){

            fetch(sendTo, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(validForm),
              })
              .then( data => data.text() )
              .then( res => {
                if(res.includes('success')){
                    setSent(true); 
                }
              } );
              
        }

    },[validForm] );



    return( 
     <form className={`contactForm round ${sent ? 'sent':''}`}>
        <fieldset>
            {inputs.map( ({name, placeholder, type, required},i) =>  
            <Fragment key={'inputkey'+name}>
                <Input 
                    name={name} 
                    placeholder={placeholder} 
                    type={type} 
                    innerRef={e => fields.current[i] = e} 
                    errorMessage={ fieldsError ? fieldsError[i] : false }
                    required={required || true}
                    />
            </Fragment>
            )}
        </fieldset>

        <fieldset>
            <label className="cta primary label">
                {validForm ? 
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className='rotate' xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.88642 0.774656C5.81552 0.592992 4.71467 0.744746 3.73287 1.20938C2.75106 1.67401 1.93573 2.42908 1.39722 3.37239C0.858707 4.3157 0.623031 5.40169 0.722091 6.48335C0.821151 7.56502 1.25016 8.59014 1.95105 9.41994C2.65194 10.2497 3.59087 10.8442 4.64073 11.1227C5.6906 11.4013 6.80071 11.3506 7.82079 10.9774C8.84088 10.6043 9.72168 9.92669 10.344 9.03643C10.9663 8.14617 11.3 7.0862 11.3 6C11.3 5.8067 11.4567 5.65 11.65 5.65C11.8433 5.65 12 5.8067 12 6C12 7.22966 11.6222 8.42962 10.9177 9.43747C10.2132 10.4453 9.21609 11.2124 8.06127 11.6348C6.90646 12.0573 5.64974 12.1147 4.46121 11.7993C3.27268 11.484 2.20975 10.811 1.41629 9.87163C0.622824 8.93223 0.137151 7.77172 0.0250085 6.54719C-0.0871344 5.32266 0.179668 4.09324 0.789301 3.02535C1.39893 1.95745 2.32196 1.10265 3.43343 0.576655C4.54491 0.050656 5.79116 -0.121142 7.00349 0.0845164C7.19407 0.116845 7.32236 0.297546 7.29003 0.488123C7.2577 0.6787 7.077 0.806985 6.88642 0.774656Z" fill="#F5F7F9"/>
                    </svg>

                :
                <svg width="24" height="24" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1530_4105)">
                    <   path d="M0.631543 3.76284C0.642989 3.70462 0.67102 3.65095 0.712262 3.60829C0.753503 3.56563 0.806196 3.53581 0.863996 3.5224L10.9197 1.18939C10.9754 1.17638 11.0336 1.17917 11.0879 1.19744C11.1421 1.21571 11.1902 1.24874 11.2267 1.29281C11.2632 1.33689 11.2866 1.39026 11.2945 1.44694C11.3023 1.50363 11.2942 1.56137 11.271 1.6137L7.10404 11.058C7.08014 11.1123 7.04108 11.1585 6.99154 11.1911C6.94201 11.2237 6.88412 11.2413 6.82483 11.2418C6.76554 11.2422 6.70738 11.2256 6.65733 11.1938C6.60729 11.162 6.56749 11.1164 6.54273 11.0625L4.58109 6.79621L0.755333 4.07351C0.70695 4.03916 0.669524 3.99157 0.647561 3.93645C0.625599 3.88134 0.620036 3.82105 0.631543 3.76284ZM5.20453 6.67954L6.81681 10.1842L10.4593 1.92862L1.66884 3.96838L4.81195 6.20545L7.94853 3.60815C8.01139 3.55609 8.09237 3.53113 8.17363 3.53878C8.2549 3.54642 8.3298 3.58603 8.38186 3.6489C8.43392 3.71177 8.45887 3.79274 8.45123 3.87401C8.44359 3.95528 8.40397 4.03018 8.3411 4.08224L5.20453 6.67954Z" fill="#F5F7F9"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1530_4105">
                    <rect width="12" height="12" fill="white" transform="translate(0.5 0.5)"/>
                    </clipPath>
                    </defs>
                </svg>
                }
                
                <input type='submit' value='submit' onClick={ sendMessage }/>
            </label>
        </fieldset>

        <section className="confirmMessage">
            <h4>Thank your for your message!</h4>
            <p>I will get back to you soonly.</p>
            <Link href='/'>
                <small className="label">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 26 26"><path d="M17.2,6.5L10.7,13l6.5,6.5l-1.3,2.6L6.8,13l9.1-9.1L17.2,6.5z"></path></svg>
                    <b>Back to the portfolio</b>
                </small> 

            </Link>
        </section>
    </form>
    );

};

export default ContactForm;

