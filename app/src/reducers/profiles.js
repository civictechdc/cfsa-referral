import {
    SET_PROFILE_SEARCH_VALUE,
} from '../actions/profiles';

const initialState = {
    currentProfile: null,
    profileSearch: '',
    profiles: [
        {
            name: 'Test Person',
        },
        {
            name: 'Test Person1',
        },
        {
            name: 'Test Person11',
        },
        {
            name: 'Test Person111',
        },
    ],
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
