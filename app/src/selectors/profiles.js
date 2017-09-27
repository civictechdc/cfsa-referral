import { createSelector } from 'reselect';


export const getProfiles = ({ profiles }) => profiles.profiles;
export const getProfileSearch = ({ profiles }) => profiles.profileSearch;

export const getSearchedProfiles = createSelector(
    [getProfiles, getProfileSearch],
    (profiles, profileSearch) => profiles.filter(p => p.name.indexOf(profileSearch) !== -1)
)