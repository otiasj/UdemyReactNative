import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import Card from '../../core/components/Card';
import CardSection from '../../core/components/CardSection';
import Button from '../../core/components/Button';

const AlbumDetails = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;

    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={styles.imageStyle} source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button title='Buy' onPress={() => Linking.openURL(url)} />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerTextStyle: {
        fontSize: 18
    },

    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    thumbnailStyle: {
        height: 50,
        width: 50
    },

    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },

    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    }
}

export default AlbumDetails;