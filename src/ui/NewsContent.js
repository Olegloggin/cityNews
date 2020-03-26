import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import NewsFooter from './NewsFooter';
import Scroll from './Scroll';
import theme from '../theme';

const NewsContent = props => {
  const {title, body_text, images} = props;
  return (
    <Scroll>
      <Text style={styles.title}>{title}</Text>
      <NewsFooter {...props} />
      <View style={styles.container}>
        <Image style={styles.img} source={{uri: images[0].image}} />
      </View>
      <Text style={styles.bodyText}>{body_text}</Text>
    </Scroll>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: theme.aligned(10),
  },
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
  },
});

export default NewsContent;
