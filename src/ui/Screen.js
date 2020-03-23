import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';

import theme from '../theme';

const Screen = props => (
  <View style={styles.main}>
    <StatusBar backgroundColor={theme.colorScarlet} />
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.colorOpacityGrey,
  },
});

export default Screen;
