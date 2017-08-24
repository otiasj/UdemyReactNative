import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './techStack/reducers';
import { Header } from './core/components'
import LibraryList from './techStack/LibraryList';

const App = () => {
    return (
        //the provider is the glue between react and redux
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1}}>
                <Header>Stack</Header>
                <LibraryList />
            </View>
        </Provider>
    );
}

export default App;