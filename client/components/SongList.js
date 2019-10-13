import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { Link } from 'react-router';
import { fetchSongs } from '../queries/queries';
import { deleteSongs } from '../mutations/mutations';

class SongList extends Component {
    onSongDelete(id) {
        this.props.mutate({
            variables: { id },
        }).then(() => this.props.data.refetch());
    }

    renderSongs() {
        return this.props.data.songs.map(({ id, title }) => {
            return (
                <li key={id} className='collection-item'>
                    <Link to={`/songs/${id}`}>
                        {title}
                    </Link>
                    < i className='material-icons' onClick={() => this.onSongDelete(id)} >delete</i >
                </li >
            )
        });
    }

    render() {
        if (this.props.data.loading) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <ul className='collection'>
                    {this.renderSongs()}
                </ul>
                <Link to='/songs/new' className='btn-floating btn-large red right'>
                    <i className='material-icons'>add</i>
                </Link>
            </div>
        )
    }
}

export default graphql(deleteSongs)(
    graphql(fetchSongs)(SongList)
);