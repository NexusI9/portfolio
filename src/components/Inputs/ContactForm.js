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
        <Input name='name' placeholder="Your name" type='text'/>
        <Input name='email' placeholder="Your email" type='email'/>
        <Input name='content' placeholder="What's on your mind?" type='textarea'/>

        <label className="cta primary">
            <input type='submit' value='submit'/>
        </label>
    </form>
    );

};

export default ContactForm;

