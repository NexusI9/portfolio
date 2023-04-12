import { useEffect } from "react";
import { connect } from "react-redux";

const mapStateToPorps = (state) => ({
    _skin: state.theme.skin
});

const SkinProvider = ({children, _skin}) => {
    
    useEffect( () => {
        //switch body attribute for CSS change to take effects
        const body = document.querySelector("body");
        body.setAttribute('data-skin',_skin || 'default');
    },[_skin]);

    return(<>{children}</>);
}

export default connect(mapStateToPorps)(SkinProvider);