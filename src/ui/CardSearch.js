import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {category} from '../formatters';
import theme from '../theme';

const CardSearch = ({item, onPress, addFavorite, isFavorite}) => {
  const favoriteColor = isFavorite ? theme.yellow : theme.colorGray;
  return (
    <TouchableOpacity style={styles.main} activeOpacity={0.9} onPress={onPress}>
      <Text style={styles.title}>
        {item.title[0].toUpperCase() + item.title.slice(1)}
      </Text>
      <View style={styles.separator} />
      <View style={styles.footer}>
        <TouchableOpacity activeOpacity={0.9} onPress={() => addFavorite(item)}>
          <Icon
            size={18}
            name={'md-star'}
            color={favoriteColor}
            style={styles.footerHeart}
          />
        </TouchableOpacity>
        <Text style={styles.footerCategory}>
          Категория: {category(item.ctype)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginVertical: theme.aligned(7),
    marginHorizontal: theme.aligned(8),
    paddingVertical: theme.aligned(8),
    paddingHorizontal: theme.aligned(8),
    elevation: 7,
    borderRadius: theme.aligned(3),
    backgroundColor: theme.colorLightGray,
  },
  title: {
    fontSize: theme.fontSize1,
    color: theme.colorDarkRed,
    marginBottom: theme.aligned(8),
  },
  separator: {
    borderWidth: theme.aligned(0.3),
    borderColor: theme.colorGray,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.aligned(5),
  },
  footerCategory: {
    fontSize: theme.fontSize0,
    color: theme.colorGray,
  },
});

export default CardSearch;
