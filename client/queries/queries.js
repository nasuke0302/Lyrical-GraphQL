import gql from 'graphql-tag';

export const fetchSongs = gql`
{
    songs {
        id
        title
    }
}`;

export const fetchSong = gql`
query song($id: ID!) {
    song(id: $id) {
        title
    }
}`;