import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import theme from '../theme';

const Scroll = ({children}) => (
  <ScrollView contentContainerStyle={styles.main}>{children}</ScrollView>
);

const styles = StyleSheet.create({
  main: {
    padding: theme.aligned(10),
  },
});

export default Scroll;
