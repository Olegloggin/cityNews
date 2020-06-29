import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import theme from '../theme';

const EmptyList = ({text}) => (
  <View style={styles.main}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: theme.colorGray,
  },
});

export default EmptyList;
