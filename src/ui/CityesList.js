import React, {useState} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Scroll from './Scroll';
import theme from '../theme';

const CityesList = ({city, cityes}) => {
  const [isModal, setIsModal] = useState(false);

  const checked = cityes.map(item => {
    if (item.slug === city.slug) {
      return {...item, checked: true};
    }
    return {...item, checked: false};
  });

  const [cityesWithState, setcityesWithState] = useState(checked);

  const changeCheck = changeCity => {
    const newChecked = cityesWithState.map(item => {
      if (item.slug === changeCity.slug) {
        return {...item, checked: !changeCity.checked};
      }
      return {...item};
    });
    setIsModal(false);
    setcityesWithState(newChecked);
  };

  return (
    <View>
      <TouchableOpacity style={styles.point} onPress={() => setIsModal(true)}>
        <Icon size={35} name={'md-map'} color={theme.colorGray} />
        <Text style={styles.text}>{city.name}</Text>
      </TouchableOpacity>

      <Modal visible={isModal} transparent>
        <View style={styles.modal}>
          <View style={styles.wrapper}>
            <Scroll>
              {cityesWithState.map(item => (
                <TouchableOpacity
                  style={styles.cityItem}
                  key={item.slug}
                  onPress={() => changeCheck(item)}>
                  {item.checked ? (
                    <Icon
                      name="ios-checkmark"
                      size={30}
                      color={theme.green}
                      style={styles.icon}
                    />
                  ) : null}
                  <Text style={styles.itemText}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </Scroll>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  point: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: theme.aligned(8),
    color: theme.fontColor,
    fontSize: theme.fontSize2,
    fontWeight: 'bold',
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colorOpacityGrey,
  },
  wrapper: {
    width: '95%',
    height: '93%',
    borderRadius: theme.aligned(3),
    backgroundColor: theme.colorLightGray,
    elevation: 7,
  },
  cityItem: {
    padding: theme.aligned(3),
    marginBottom: theme.aligned(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: theme.aligned(30),
    color: theme.fontColor,
    fontSize: theme.fontSize2,
  },
  icon: {
    position: 'absolute',
    left: theme.aligned(5),
  },
});

export default CityesList;
