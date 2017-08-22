//Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/core/components/Header';
import AlbumList from './src/albums/components/AlbumList';

//Create a component
const App = () => (
    <View style={{ flex: 1 }}>
        <Header title="Albums" />
        <AlbumList />
    </View>
);

//Render it to the device
AppRegistry.registerComponent('albums', () => App);

