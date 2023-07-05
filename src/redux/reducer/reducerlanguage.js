import { CHANGE_LANGUAGE } from '../types'

const initialState = {
    language: 'en'
};

export const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE: {
            return { 
                language: action.language
            };
        }
        default:
            return state;
    }
};

