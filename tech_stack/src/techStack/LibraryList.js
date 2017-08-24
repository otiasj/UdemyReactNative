import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = dataSource.cloneWithRows(this.props.libraries);
    }

    //Renders a single line item
    renderListItem(library) {
        return <ListItem library={library} />
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderListItem}
            />
        );
    }
}

//take our global state object and provides it as 'props' to our local LibraryList object
const mapStateToProps = state => {
    //state here contains all the reducer produced data.
    //console.log(state)

    //return a new Object as props containing the libraries object (which was produced by the LibraryReducer object)
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);

