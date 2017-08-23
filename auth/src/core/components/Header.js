import React from 'react';
import { Text, View } from 'react-native';

//Make a component
const Header = (props) => {
    return ( 
        <View style={styles.myBackgroundStyle}>
            <Text style={styles.myTextStyle}>{props.title}</Text>
        </View>
    );
};

const styles = {
    myBackgroundStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    },
    myTextStyle: {
        fontSize: 20,
    }
};

//Make the component available to other parts of the app
export { Header };
