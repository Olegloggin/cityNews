import React from 'react';
import {FlatList, Text} from 'react-native';
import {connect} from 'react-redux';

import {getSearch} from '../actions/api';
import Screen from '../ui/Screen';

class Search extends React.Component {
  state = {page: 1};
  initialPage = 1;
  currentCity = this.props.currentCity.slug;
  //getNewsAction = this.props.getNewsAction;

  componentDidMount() {
    this.props.getSearch(this.currentCity).then(req => {
      // console.log('WWW', req);
    });
  }
  // 
  // 
  // refresh() {
  //   this.getNewsAction(this.initialPage, this.currentCity);
  // }
  // 
  // getNextPage() {
  //   this.setState(prev => {
  //     this.getNewsAction(prev.page + 1, this.currentCity);
  //     return {page: prev.page + 1};
  //   });
  // }
  // 

  render() {
    return (
      <Screen>
        <Text>123456</Text>
        {/*<FlatList
          onRefresh={() => this.refresh()}
          //refreshing={isRequested}
          //data={news}
          renderItem={({item}) => <Text>123456</Text>}
          onEndReached={() => this.getNextPage()}
          onEndReachedThreshold={2}
          keyExtractor={item => item.id.toString()}
        />*/}
      </Screen>
    );
  }
}

const connector = connect(
  state => ({
    // news: state.newsReducer.news,
    // isRequested: state.newsReducer.isRequested,
    // favorite: state.newsReducer.favorite,
    currentCity: state.settingsReducer.currentCity,
  }),
  {
    // getNewsAction: getNewsAction,
    // addFavoriteAction: addFavoriteAction,
    getSearch: getSearch,
  },
);

export default connector(Search);
