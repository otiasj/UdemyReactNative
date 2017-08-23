import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, InputField, Spinner } from '../core/components'

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onButtonPress() {
        const { email, password } = this.state;

        //clear the errors and set the loading flag to true
        this.setState({
            error: '',
            loading: true
        });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch((error) => {
                console.log(error);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFailed.bind(this, error))
            })
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        })
    }

    onLoginFailed(error) {
        console.log(error);
        this.setState({ error: 'Authentication Failed\n' + error.message, loading: false })
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />
        } else {
            return (
                <Button
                    title="Login"
                    onPress={this.onButtonPress.bind(this)}
                />
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection >
                    <InputField
                        label="Email"
                        placeholder="user@gmail.com"
                        secureTextEntry={false}
                        autoCorrect={false}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection >
                    <InputField
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                        autoCorrect={false}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection >
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
