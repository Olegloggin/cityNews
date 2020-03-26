import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import theme from '../theme';

const EmptyList = () => (
  <View style={styles.main}>
    <Text style={styles.text}>Список пока пуст</Text>
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
