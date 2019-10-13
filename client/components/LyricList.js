import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import { likeLyric } from '../mutations/mutations';
class LyricList extends Component {

    onLike({ id, likes }) {
        this.props.mutate({
            variables: { id },
            optimisticResponse: {
                __typename: 'Mutation',
                likeLyric: {
                    id,
                    likes: likes + 1,
                    __typename: 'LyricType'
                }
            }
        })
    }

    render() {
        return (
            <ul className='collection'>
                {this.props.lyrics.map(({ id, content, likes }) => {
                    return (
                        <li key={id} className='collection-item'>
                            {content}
                            <div className='vote-box'>
                                {likes}
                                <i className='material-icons' onClick={() => this.onLike({ id, likes })}>thumb_up</i>
                            </div>
                        </li>
                    );
                })}
            </ul>
        )
    }
}

export default graphql(likeLyric)(LyricList);