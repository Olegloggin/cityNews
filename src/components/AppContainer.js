import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import theme from '../theme';
import News from './News';
import Favorite from './Favorite';
import Menu from './Menu';
import Search from './Search';
import IconComponent from '../ui/IconComponent';
import NewsScreen from './NewsScreen';
import SearchScreen from './SearchScreen';

const NewsScreens = createStackNavigator(
  {
    News: {screen: News},
    NewsLearnMore: {screen: NewsScreen},
  },
  {
    initialRouteName: 'News',
    headerMode: 'none',
  },
);

const SearchScreens = createStackNavigator(
  {
    Search: {screen: Search},
    SearchLearnMore: {screen: SearchScreen},
  },
  {
    initialRouteName: 'Search',
    headerMode: 'none',
  },
);

const BottomTabNavigator = createMaterialBottomTabNavigator(
  {
    News: {
      screen: NewsScreens,
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
      screen: SearchScreens,
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

export default createAppContainer(BottomTabNavigator);
