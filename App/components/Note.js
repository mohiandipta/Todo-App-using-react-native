import { StatusBar } from "expo-status-bar";
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, } from "react-native";

export default class Note extends React.Component {
    render() {
        return (

            <View key={this.props.keyval} style={style.note}>

                <Text style={style.noteText}>{this.props.val.date}</Text>
                <Text style={style.noteText}>{this.props.val.note}</Text>

                <TouchableOpacity onPress={this.props.deleteMethod} style={style.noteDelete}>
                    <Text style={style.noteDeleteText}>D</Text>
                </TouchableOpacity>

            </View>

        );
    }
}

const style = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderBottomColor: '#E91E63',
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F28A2E',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    noteDeleteText: {
        color: 'white',
    }
});
