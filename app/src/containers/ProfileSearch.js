import React from 'react';
import { connect } from 'react-redux';

import { getSearchedProfiles, getProfileSearch } from '../selectors/profiles';

import { setProfileSearchValue } from '../actions/profiles';


const Comp = ({
    profiles,
    search,
    setSearch,
}) => {
    return (
        <div>
            <input type="text" value={ search } onChange={ setSearch }/>
            {profiles.map((profile, key) => <div key={ key }>{ profile.name }</div>)}
        </div>
    )
}

const mapStateToProps = state => ({
    profiles: getSearchedProfiles(state),
    search: getProfileSearch(state),
});

const mapDispatchToProps = dispatch => ({
    setSearch: e => {
        dispatch(setProfileSearchValue(e.target.value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Comp);