import React from 'react';
import {View, Text, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Scroll from './Scroll';
import {category} from '../formatters';
import theme from '../theme';

const SearchContent = props => {
  const {item, isFavorite, addFavoriteAction} = props;

  if (item.description.slice(0, 3) === '<p>') {
    item.description = item.description
      .trim()
      .slice(3, item.description.length - 4);
  }

  const favoriteColor = isFavorite ? theme.yellow : theme.colorGray;
  return (
    <Scroll>
      <Text style={styles.title}>
        {item.title[0].toUpperCase() + item.title.slice(1)}
      </Text>
      <View style={styles.subInfo}>
        <TouchableOpacity
          style={styles.favorite}
          onPress={() => addFavoriteAction(item)}>
          <Icon
            size={18}
            name={'md-star'}
            color={favoriteColor}
            style={styles.favoriteIcon}
          />
          <Text style={styles.count}>
            {isFavorite ? item.favorites_count + 1 : item.favorites_count}
          </Text>
        </TouchableOpacity>
        <Text style={styles.subInfoCategory}>
          Категория: {category(item.ctype)}
        </Text>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.footerInfo}>
        {item.address ? (
          <TouchableOpacity
            style={styles.footerItem}
            onPress={() => {
              Linking.openURL(`geo:${item.coords.lat},${item.coords.lon}`);
            }}>
            <Icon name="ios-navigate" size={25} color={theme.colorDarkRed} />
            <Text style={styles.footerItemText}>Адрес: {item.address}</Text>
          </TouchableOpacity>
        ) : null}
        {item.phone ? (
          <TouchableOpacity
            style={styles.footerItem}
            onPress={() => {
              Linking.openURL(`tel:${item.phone}`);
            }}>
            <Icon name="ios-call" size={25} color={theme.colorDarkRed} />
            <Text style={styles.footerItemText}>Телефон: {item.phone}</Text>
          </TouchableOpacity>
        ) : null}
        {item.item_url ? (
          <TouchableOpacity
            style={styles.footerItem}
            onPress={() => {
              Linking.openURL(item.item_url);
            }}>
            <Icon name="ios-browsers" size={25} color={theme.colorDarkRed} />
            <Text style={styles.footerItemText}>Подробнее на сайте KudaGo</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </Scroll>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: theme.fontSize1,
    color: theme.colorDarkRed,
    marginBottom: theme.aligned(8),
    fontWeight: 'bold',
  },
  subInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: theme.aligned(8),
    borderBottomWidth: theme.aligned(0.7),
    borderColor: theme.colorGray,
  },
  description: {
    fontSize: theme.fontSize1,
    lineHeight: theme.aligned(18),
    color: theme.fontColor,
    marginTop: theme.aligned(10),
  },
  favorite: {
    flexDirection: 'row',
  },
  count: {
    marginLeft: theme.aligned(4),
    color: theme.colorGray,
  },
  subInfoCategory: {
    color: theme.colorGray,
  },
  footerInfo: {
    marginTop: theme.aligned(20),
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.aligned(15),
  },
  footerItemText: {
    color: theme.colorGray,
    marginLeft: theme.aligned(5),
  },
});

export default SearchContent;
