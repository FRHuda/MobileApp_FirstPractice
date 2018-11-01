import React, { Component } from 'react';
import { View } from 'react-native';

// IMPORT FROM COMPONENTS
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


class App extends Component {


  render() {
    return (
      <View>
        <Header headerText='Albums' />
        <AlbumList />
      </View>
    );
  }
}

export default App;
