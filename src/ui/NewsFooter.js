import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import theme from '../theme';
import {dateFormat} from '../formatters';

const NewsFooter = ({item, publication_date, addFavorite, isFavorite}) => {
  const favoriteColor = isFavorite ? theme.yellow : theme.colorGray;
  return (
    <View style={styles.itemFooter}>
      <TouchableOpacity activeOpacity={0.9} onPress={() => addFavorite(item)}>
        <Icon
          size={18}
          name={'md-star'}
          color={favoriteColor}
          style={styles.footerHeart}
        />
      </TouchableOpacity>
      <Text style={styles.date}>{dateFormat(item.publication_date)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerHeart: {
    marginLeft: theme.aligned(5),
  },
  date: {
    fontSize: theme.fontSize0,
    color: theme.colorGray,
  },
});

export default NewsFooter;
