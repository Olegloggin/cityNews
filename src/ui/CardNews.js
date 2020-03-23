import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import theme from '../theme';
import {dateFormat} from '../formatters';

const CardNews = props => {
  const favoriteColor = props.isFavorite ? theme.yellow : theme.colorGray;
  return (
    <View style={styles.main}>
      <TouchableOpacity activeOpacity={0.9} onPress={props.onPress}>
        <Text style={styles.title}>{props.item.title}</Text>
        <Image style={styles.img} source={{uri: props.item.images[0].image}} />
      </TouchableOpacity>
      <Text style={styles.bodyText} numberOfLines={2}>
        {props.item.body_text}
      </Text>
      <View style={styles.separator} />
      <View style={styles.itemFooter}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => props.addFavorite(props.item.id)}>
          <Icon
            size={18}
            name={'md-star'}
            color={favoriteColor}
            style={styles.footerHeart}
          />
        </TouchableOpacity>
        <Text style={styles.date}>
          {dateFormat(props.item.publication_date)}
        </Text>
      </View>
    </View>
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

export default CardNews;
