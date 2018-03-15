import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import EmojiSelector from '../components/EmojiSelector';

class TestEmojiSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textViewValue: 'asdsad'
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textView}>
          {this.state.textViewValue}
        </Text>
        <EmojiSelector
          style={styles.emojiSelector}
          columns={10}
          showSearchBar={false}
          showHistory={true}
          onEmojiSelected={emoji => console.log(emoji)}
        />
      </View>
    );
  }
}

export default TestEmojiSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  textView: {
    flex: 1,
    color: '#000',
  },
  emojiSelector: {
    flex: 0,
    width: null,
    height: 256,
    opacity: 1,
  },
});
