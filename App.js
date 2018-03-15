/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TestEmojiSelector from './app/TestEmojiSelector';
import TestEmojiPicker from './app/TestEmojiPicker';

// --------------------------------------------------

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TestEmojiPicker />
      </View>
    );
  }
}

// --------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
});
