import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';

// IMPORT COMPONENTS
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
    state = { albums: [] }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((res) => this.setState({ albums: res.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
        <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state.albums);
        return (
            <ScrollView style={{ marginBottom: 65 }}>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
