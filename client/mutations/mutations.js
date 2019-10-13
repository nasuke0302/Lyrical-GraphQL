import gql from 'graphql-tag';

export const addSongs = gql`
mutation addSong($title: String) {
    addSong (title: $title) {
        title
    }
}`;