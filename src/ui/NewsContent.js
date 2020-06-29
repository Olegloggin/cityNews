import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import NewsFooter from './NewsFooter';
import Scroll from './Scroll';
import theme from '../theme';

const NewsContent = props => {
  const {title, body_text, images, site_url} = props.item;
  return (
    <Scroll>
      <Text style={styles.title}>{title}</Text>
      <NewsFooter {...props} />
      <View style={styles.container}>
        <Image style={styles.img} source={{uri: images[0].image}} />
      </View>
      <Text style={styles.bodyText}>{body_text}</Text>
      {site_url ? (
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => {
            Linking.openURL(site_url);
          }}>
          <Icon name="ios-browsers" size={25} color={theme.colorDarkRed} />
          <Text style={styles.footerItemText}>Подробнее на сайте KudaGo</Text>
        </TouchableOpacity>
      ) : null}
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
  container: {
    marginTop: theme.aligned(5),
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
    marginBottom: theme.aligned(15),
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

export default NewsContent;
