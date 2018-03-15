import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

// --------------------------------------------------

import EmojiPicker from '../EmojiPicker';

// --------------------------------------------------
// TestEmojiPicker
// --------------------------------------------------

class TestEmojiPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: 'hello',
      isEmojiPickerHidden: true,
    };
  }
  componentDidMount() {
    
  }
  // --------------------------------------------------
  onEmojiButtonPress = () => {
    this.setState({
      isEmojiPickerHidden: !this.state.isEmojiPickerHidden,
    });
  }
  onTextInputChangeText = (text) => {

  }
  onEmojiSelected = (emoji) => {

  }
  // --------------------------------------------------
  renderMessages() {
    const { messages } = this.state;
    return (
      <ScrollView style={styles.messagesScrollView}>
        <Text style={styles.messagesText}>
          {messages}
        </Text>
      </ScrollView>
    );
  }
  renderComposer() {
    const { isEmojiPickerHidden } = this.state;
    const emojiButtonTitleStyle = isEmojiPickerHidden ? 
      styles.emojiButtonTitle : styles.emojiButtonTitleBold;
    return (
      <View style={styles.composerView}>
        <TextInput
          style={styles.textInput}
          onTextChange={this.onTextChange}
        />
        <TouchableOpacity
          style={styles.emojiButton}
          onPress={this.onEmojiButtonPress}
        >
          <Text style={emojiButtonTitleStyle}>
            {'Emoji'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  renderEmojiPicker() {
    const { isEmojiPickerHidden } = this.state;
    if (isEmojiPickerHidden) return null;
    return (
      <EmojiPicker
        onEmojiSelected={this.onEmojiSelected}
      />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderMessages()}
        {this.renderComposer()}
        {this.renderEmojiPicker()}
      </View>
    );
  }
}

export default TestEmojiPicker;

// --------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  messagesScrollView: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
  },
  messagesText: {
    fontSize: 15,
    fontWeight: '300',
    color: '#202020',
    backgroundColor: '#0000',
  },
  composerView: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: 44,
    backgroundColor: '#EAEAEA',
  },
  textInput: {
    flex: 1,
    margin: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  emojiButton: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: null,
    backgroundColor: '#0000'
  },
  emojiButtonTitle: {
    fontSize: 14,
    fontWeight: '300',
    color: '#404040',
  },
  emojiButtonTitleBold: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0067C4',
  },
});
