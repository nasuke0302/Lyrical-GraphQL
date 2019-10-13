import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import { fetchSong } from '../queries/queries';

class SongDetail extends Component {
    render() {
        const { song } = this.props.data;
        if (!song) { return <div>Loading....</div> };
        return (
            <div className='container'>
                <Link to='/'>Back</Link>
                <h3>{song.title}</h3>
            </div>
        );
    }
}

export default graphql(fetchSong, {
    options(props) {
        return { variables: { id: props.params.id } }
    }
})(SongDetail);