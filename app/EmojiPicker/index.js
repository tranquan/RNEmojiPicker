/**
 * Copyright (C) SaigonMD, Inc - All Rights Reserved
 * Licensed under the MIT license.
 * Written by Tran Quan <tranquan221b@gmail.com>, Jan 2018
 */

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import EmojiDataSource from './DataSource';
import EmojiView from './EmojiView';
import Toolbar from './Toolbar';

// --------------------------------------------------

const SCREEN_SIZE = Dimensions.get('window');

const EMOJI_IDEAL_PADDING = 0;
const EMOJIS_CONTAINER_PADDING = 4;
const CONTAINER_WIDTH = SCREEN_SIZE.width - EMOJIS_CONTAINER_PADDING * 2;

const EMOJI_SIZE = 40;
const EMOJI_FONT_SIZE = EMOJI_SIZE / 4 * 3;

const EMOJI_BUTTON_SIZE = (EMOJI_SIZE + EMOJI_IDEAL_PADDING * 2);
const EMOJIS_COLUMS = Math.floor(CONTAINER_WIDTH / EMOJI_BUTTON_SIZE);
const EMOJI_PADDING = (CONTAINER_WIDTH - (EMOJIS_COLUMS * EMOJI_SIZE) - 4) / (EMOJIS_COLUMS) / 2;

// --------------------------------------------------
// EmojiPicker
// --------------------------------------------------

class EmojiPicker extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: 'Smileys & People',
    };
  }
  componentDidMount() {
    const categories = Object.keys(EmojiDataSource);
    for (let i = 0; i < categories.length; i += 1) {
      console.log(`EmojiPicker.category: ${categories[i]}`);
    }  
  }
  // --------------------------------------------------
  onCategorySelected = (category) => {
    console.log(`EmojiPicker.onCategorySelected: ${category.name}`);
    let selectedCategory = category.name;
    this.setState({
      selectedCategory,
    });
  }
  onEmojiSelected = (emoji) => {
    console.log(`EmojiPicker.onEmojiSelected: ${emoji}`);
    this.props.onEmojiSelected(emoji);
  }
  // --------------------------------------------------
  renderToolbar() {
    const categories = ['people', 'nature', 'food', 'activities', 'places', 'objects', 'symbols', 'flags'];
    return (
      <Toolbar
        categories={categories}
        onCategorySelected={this.onCategorySelected}
      />
    );
  }
  renderCategoryName() {
    const category = this.state.selectedCategory;
    return (
      <Text style={styles.categoryName}>
        {category}
      </Text>
    );
  }
  renderEmojis() {
    const category = this.state.selectedCategory;
    const emojis = EmojiDataSource[category].map(item => item.char);
    return (
      <ScrollView 
        style={styles.emojisScrollView}
      >
        <View 
          style={styles.emojisContainer}
        >
          {
            emojis.map((emoji, index) =>
              <EmojiView
                emojiSize={EMOJI_SIZE}
                emojiFontSize={EMOJI_FONT_SIZE}
                emojiPadding={EMOJI_PADDING}
                key={index}
                emoji={emoji}
                onPress={this.onEmojiSelected}
              />
            )
          }
        </View>
      </ScrollView>
    );
  }
  render() {
    const { toolbarPosition } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.seperator} />
        {toolbarPosition === 'top' ? this.renderToolbar() : null}
        {this.renderCategoryName()}
        {this.renderEmojis()}
        {toolbarPosition !== 'top' ? this.renderToolbar() : null}
      </View>
    );
  }
}

EmojiPicker.defaultProps = {
  emojiSize: 40,
  toolbarPosition: 'bottom',
  onEmojiSelected: () => {},
};

export default EmojiPicker;

// --------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: null,
    height: 256,
    backgroundColor: '#f000',
  },
  categoryName: {
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
    marginBottom: 4,
    fontSize: 16,
    fontWeight: '400',
    color: '#7f7f7f',
    backgroundColor: '#0000',
  },
  emojisScrollView: {
    flex: 1,
    padding: 0,
  },
  emojisContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: EMOJIS_CONTAINER_PADDING,
    paddingRight: EMOJIS_CONTAINER_PADDING,
  },
  seperator: {
    height: 1,
    backgroundColor: '#EAEAEA'
  }
});
