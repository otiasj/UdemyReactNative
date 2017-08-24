import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from '../core/components';
import * as actions from '../techStack/actions';//here*

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>{library.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;
        console.log(this.props);
        return (
            //on Press call the action creator selectLibrary
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    //    console.log(state);
    //return { expanded: expanded};
    return { expanded };
};

//passing actions as second parameters will allow us to call the action creator,
//because we imported all the actions from here* we can create any action defined
//the action executes then pass the result as props
export default connect(mapStateToProps, actions)(ListItem);