import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
// import { createStackNavigator } from 'react-navigation-stack';

import theme from '../theme';
import News from './News';
import Favorite from './Favorite';
import Menu from './Menu';
import Search from './Search';
import IconComponent from '../ui/IconComponent';
// import NewsLearnMore from './NewsLearnMore';

const BottomTabNavigator = createMaterialBottomTabNavigator(
  {
    News: {
      screen: News,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <IconComponent name={'ios-images'} focused={focused} />
        ),
      },
    },
    Favorite: {
      screen: Favorite,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <IconComponent name={'md-star-outline'} focused={focused} />
        ),
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <IconComponent name={'ios-search'} focused={focused} />
        ),
      },
    },
    Menu: {
      screen: Menu,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <IconComponent name={'ios-menu'} focused={focused} />
        ),
      },
    },
  },
  {
    initialRouteName: 'News',
    labeled: false,
    barStyle: {
      backgroundColor: theme.colorLightGray,
      borderTopColor: theme.colorScarlet,
      borderTopWidth: theme.aligned(1),
      height: theme.aligned(45),
    },
  },
);

// const NewsScreen = createStackNavigator({
//   News: {screen: News},
//   NewsLearnMore: {screen: NewsLearnMore},
// });

export default createAppContainer(BottomTabNavigator);
