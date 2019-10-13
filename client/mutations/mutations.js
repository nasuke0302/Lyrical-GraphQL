import gql from 'graphql-tag';

export const addSongs = gql`
mutation addSong($title: String) {
    addSong (title: $title) {
        title
    }
}`;

export const deleteSongs = gql`
    mutation deleteSong($id: ID) {
        deleteSong(id: $id) {
            id
        }
    }
`;

export const addLyricToSong = gql`
    mutation addLyricToSong($content: String, $songId: ID!) {
        addLyricToSong(content: $content, songId: $songId) {
            id 
            lyrics {
                id
                content
            }
            
        }
    }
`;