import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import theme from '../theme';

const IconComponent = props => {
  return (
    <View style={styles.icon}>
      <Icon
        size={25}
        name={props.name}
        color={props.focused ? theme.colorRed : theme.colorGray}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: -theme.aligned(5),
  },
});

export default IconComponent;
