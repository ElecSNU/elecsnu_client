import React from 'react';

const Elections = (props) => {
    return <div>{props.match.params.election_id}</div>;
};

export default Elections;
