import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import theme from '../theme';

const ErrorTost = props => {
  if (props.isError) {
    return (
      <View style={styles.main}>
        <Icon
          size={35}
          name={'ios-alert'}
          color={theme.colorLightGray}
          style={styles.icon}
        />
        <Text style={styles.text}>{props.errorText}</Text>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: theme.aligned(7),
    alignSelf: 'center',
    paddingVertical: theme.aligned(17),
    paddingLeft: theme.aligned(80),
    backgroundColor: theme.colorRed,
    borderRadius: theme.aligned(3),
    height: theme.aligned(70),
    width: '97%',
    position: 'absolute',
    zIndex: 2,
  },
  icon: {
    position: 'absolute',
    left: theme.aligned(20),
    top: theme.aligned(16),
  },
  text: {
    color: theme.colorLightGray,
    width: '90%',
    lineHeight: theme.aligned(19),
    textAlign: 'center',
  },
});

export default ErrorTost;
