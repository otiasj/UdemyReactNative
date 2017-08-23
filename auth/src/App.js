import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner, CardSection } from './core/components';
import LoginForm from './login/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        var config = {
            FIXME add firebase config here
        };
        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderMainPage() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}
                            title='Log out' />
                    </CardSection>
                );
            case false:
                return (<LoginForm />);
            default:
                return <Spinner size="large" />
        }
    }

    render() {
        return (
            <View>
                <Header title='Authentication' />
                {this.renderMainPage()}
            </View>
        );
    }
}

export default App;