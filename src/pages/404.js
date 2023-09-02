import Link from "next/link";
import illustration from '@/assets/illustration.webp';

export default () => {

    return (
        <section className="container not-found">

            <img src={illustration.src} alt='nassim illustration'/>
            <div>
                <h1>404 error</h1>
                <h2>Oh hi! Look like you lost yourself</h2>
                <h3>Rest assured, let's bring you back to the homepage</h3>
                <Link className="cta primary" href='/'><b>Back to the homepage</b></Link>
            </div>

        </section>
    );

}