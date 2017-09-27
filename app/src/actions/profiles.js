export const SET_PROFILE_SEARCH_VALUE = 'SET_PROFILE_SEARCH_VALUE';


export function setProfileSearchValue(searchValue) {
    return {
        type: SET_PROFILE_SEARCH_VALUE,
        payload: {
            searchValue,
        }
    }
}