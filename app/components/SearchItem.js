import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

export default class SearchItem extends Component {
    render() {
        return (
            <TouchableHighlight
                onPress={() => {
                    this.props.infoActions.getMainInfo(this.props.city, this.props.country);
                    this.props.uiActions.updateSearch("");
                    this.props.uiActions.closeSearch();
                }}
                underlayColor={"rgba(238,238,238,0.06)"}
                style={styles.searchItemButton}>
                <View style={[styles.searchItem, this.props.style]}>
                    <Text style={styles.searchItemText}>{this.props.city}, {this.props.state}, {this.props.country}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    searchItemButton: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    searchItemText: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 16,
        paddingTop: 15,
        paddingBottom: 15,
        color: '#afafaf',
    },
    searchItem: {
        flex: 1,
        flexDirection: "row",
        borderColor: "rgba(238,238,238,0.31)",
        borderBottomWidth: 1,
    }
});
