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
    flexDirection: 'row',
    marginTop: theme.aligned(7),
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: theme.aligned(10),
    paddingLeft: theme.aligned(20),
    paddingRight: theme.aligned(40),
    backgroundColor: theme.colorRed,
    borderRadius: theme.aligned(3),
    width: '97%',
    position: 'absolute',
    zIndex: 2,
  },
  icon: {
    marginRight: theme.aligned(10),
  },
  text: {
    color: theme.colorLightGray,
    lineHeight: theme.aligned(19),
    textAlign: 'center',
  },
});

export default ErrorTost;
