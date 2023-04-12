import { combineReducers } from "redux"
import { createStore } from "redux";

const themeReducer = (state={}, action) => {

    switch(action.type){
        case 'SWITCH_SKIN':
            return {
                ...state,
                skin: action.skin
            }
        default:
            return {
                ...state,
                skin: 'default'
            };
    };
}


const menuReducer = (state={}, action) => {

    switch(action.type){
        case 'TOGGLE_BACK_BUTTON':
            return{
                ...state,
                homebutton: action.active
            };
        
        default:
            return {...state};
    }
}

const flowReducer = (state={}, action) => {

    switch(action.type){

        case 'CHANGE_CATEGORY':
        return{
            ...state,
            category: action.category
        };

        default:
            return {...state};

    };
}

const rootReducer = combineReducers({
    theme: themeReducer,
    flow: flowReducer,
    menu: menuReducer
});

const store = createStore(rootReducer);

export default store;
