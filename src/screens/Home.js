import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyForm from '../component/Redux_form/MyForm';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello</Text>
                <MyForm {...this.props} />
            </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 50,
    },
});