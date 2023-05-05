import { useEffect, useState } from "react";
import Input from "./Input";


const ContactForm = () => {
    
    const [mailPath, setMailPath] = useState();

    const sendMessage = () => {

    }

    useEffect(() => {
        setMailPath(  window.location.origin + (window.location.hostname.includes('localhost') ? '/public/mail/index.php' : '/mail/index.php') );
    }, []);

    return( mailPath && 
     
     <form action={mailPath} className="round">
        <fieldset>
            <Input name='name' placeholder="Your name" type='text'/>
            <Input name='email' placeholder="Your email" type='email'/>
            <Input name='content' placeholder="What's on your mind?" type='textarea'/>
        </fieldset>

        <fieldset>
            <label className="cta primary">
                <input type='submit' value='submit'/>
            </label>
        </fieldset>
    </form>
    );

};

export default ContactForm;

