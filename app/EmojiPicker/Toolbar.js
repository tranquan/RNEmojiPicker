/**
 * Copyright (C) SaigonMD, Inc - All Rights Reserved
 * Licensed under the MIT license.
 * Written by Tran Quan <tranquan221b@gmail.com>, Jan 2018
 */

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

// --------------------------------------------------

const EMOJI_SIZE = 32;
const EMOJI_FONT_SIZE = EMOJI_SIZE / 4 * 3;

const EMOJI_CATEGORIES = {
  history: {
    type: 'history',
    symbol: '🕘',
    name: 'Recently used'
  },
  people: {
    type: 'people',
    symbol: '😊',
    name: 'Smileys & People'
  },
  nature: {
    type: 'nature',
    symbol: '🐶',
    name: 'Animals & Nature'
  },
  food: {
    type: 'food',
    symbol: '🍔',
    name: 'Food & Drink'
  },
  activities: {
    type: 'activities',
    symbol: '⚾️',
    name: 'Activities'
  },
  places: {
    type: 'places',
    symbol: '✈️',
    name: 'Travel & Places'
  },
  objects: {
    type: 'objects',
    symbol: '💡',
    name: 'Objects'
  },
  symbols: {
    type: 'symbols',
    symbol: '❤️',
    name: 'Symbols'
  },
  flags: {
    type: 'flags',
    symbol: '🚩',
    name: 'Flags'
  }
};

// --------------------------------------------------
// Toolbar
// --------------------------------------------------

class Toolbar extends PureComponent {
  onCategoryPress = (category) => {
    this.props.onCategorySelected(category);
  }
  render() {
    const { 
      categories,
      isTopSeparatorHidden,
      isBottomSeparatorHidden,
    } = this.props;
    return (
      <View style={styles.container}>
        {
          isTopSeparatorHidden ? null : <View style={styles.seperator} />
        }
        <View style={styles.rowContainer}>
          <ScrollView 
            style={styles.categoriesScrollView}
            horizontal={true}
          >
            <View style={styles.categoriesContainer}>
              {
                categories.map(key => {
                  const category = EMOJI_CATEGORIES[key];
                  return (
                    <TouchableOpacity
                      key={key}
                      style={styles.emojiButton}
                      activeOpacity={0.5}
                      onPress={() => this.onCategoryPress(category)}
                    >
                      <Text 
                        style={styles.emojiText}
                      >
                        {category.symbol}
                      </Text>
                    </TouchableOpacity>
                  );
                })
              }
            </View>
          </ScrollView>
        </View>
        {
          isBottomSeparatorHidden ? null : <View style={styles.seperator} />
        }
      </View>
    );
  }
}

Toolbar.defaultProps = {
  categories: [],
  isTopSeparatorHidden: false,
  isBottomSeparatorHidden: false,
  onCategorySelected: () => {},
};

export default Toolbar;

// --------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 4,
    paddingRight: 4,
    backgroundColor: '#fff',
  },
  rowContainer: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: '#0000',
  },
  categoriesScrollView: {
    flex: 1,
    backgroundColor: '#0000',
  },
  categoriesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#0000',
  },
  emojiButton: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
  },
  emojiText: {
    width: null,
    height: EMOJI_SIZE,
    fontSize: EMOJI_FONT_SIZE,
    opacity: 1.0,
    color: '#000',
    backgroundColor: '#0000'
  },
  seperator: {
    height: 1,
    backgroundColor: '#EAEAEA'
  }
});
