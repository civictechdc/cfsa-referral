import React from 'react';
import { connect } from 'react-redux';
import {
    Row,
    Col,
    Container,
    Input,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText
} from 'reactstrap';

import { getSearchedProfiles, getProfileSearch } from '../selectors/profiles';

import { setProfileSearchValue } from '../actions/profiles';


const Comp = ({
    profiles,
    search,
    setSearch,
}) => {
    return (
        <Container>
            <h1>Welcome</h1>
            <Row>
                <Col>
                    <Input placeholder="Search profiles" value={ search } onChange={ setSearch } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup>
                    {profiles.map((profile, key) => (
                        <ListGroupItem key={ key }>
                            <ListGroupItemHeading>
                                { profile.name }
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                                { profile.address }
                            </ListGroupItemText>
                        </ListGroupItem>
                    ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
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