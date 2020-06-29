import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import theme from '../theme';

const InputText = ({value, onSearch, onChange}) => {
  const startSearch = () => {
    onSearch();
    Keyboard.dismiss();
  };

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.input}
        placeholder="Поиск"
        autoFocus
        value={value}
        onChangeText={text => onChange(text)}
        onSubmitEditing={startSearch}
      />
      <TouchableOpacity onPress={startSearch} style={styles.searchIcon}>
        <Icon name="ios-search" size={25} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    position: 'relative',
  },
  input: {
    borderBottomWidth: theme.aligned(1),
    borderBottomColor: theme.colorDarkRed,
    paddingLeft: theme.aligned(10),
    marginBottom: theme.aligned(15),
  },
  searchIcon: {
    position: 'absolute',
    top: theme.aligned(12),
    right: theme.aligned(15),
    color: theme.colorGray,
  },
});

export default InputText;
