import {
    SET_PROFILE_SEARCH_VALUE,
} from '../actions/profiles';

const initialState = {
    currentProfile: null,
    profileSearch: '',
    profiles: [],
}


function profiles(state = initialState, action) {
    switch(action.type) {
        case SET_PROFILE_SEARCH_VALUE:
            return {
                ...state,
                profileSearch: action.payload.searchValue,
            }
        default:
            return state;
    }
}

export default profiles;
