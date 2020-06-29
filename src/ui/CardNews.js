import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import NewsFooter from './NewsFooter';

import theme from '../theme';

const CardNews = ({isFavorite, onPress, item, addFavorite}) => (
  <View style={styles.main}>
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <Text style={styles.title}>{item.title}</Text>
      <Image style={styles.img} source={{uri: item.images[0].image}} />
    </TouchableOpacity>
    <Text style={styles.bodyText} numberOfLines={2}>
      {item.body_text}
    </Text>
    <View style={styles.separator} />
    <NewsFooter
      item={item}
      publication_date={item.publication_date}
      addFavorite={addFavorite}
      isFavorite={isFavorite}
    />
  </View>
);

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
    fontWeight: 'bold',
  },
  img: {
    flex: 1,
    aspectRatio: 1.5,
    resizeMode: 'cover',
  },
  bodyText: {
    fontSize: theme.fontSize1,
    lineHeight: theme.aligned(18),
    color: theme.fontColor,
    marginTop: theme.aligned(10),
  },
  separator: {
    borderWidth: theme.aligned(0.3),
    borderColor: theme.colorGray,
    marginVertical: theme.aligned(5),
  },
});

export default CardNews;
