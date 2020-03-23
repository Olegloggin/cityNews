import React from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';

import {getNewsAction} from '../actions/getNewsAction';
import {addFavoriteAction} from '../actions/addFavorite';
import Screen from '../ui/Screen';
import CardNews from '../ui/CardNews';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: 1};
  }

  componentDidMount() {
    this.props.getNewsAction(1);
  }

  refresh() {
    this.props.getNewsAction(1);
  }

  getNextPage() {
    this.setState(prev => {
      this.props.getNewsAction(prev.page + 1);
      return {page: prev.page + 1};
    });
  }

  render() {
    const {news, isRequested, favorite} = this.props;
    return (
      <Screen>
        <FlatList
          onRefresh={() => this.refresh()}
          refreshing={isRequested}
          data={news}
          renderItem={({item}) => {
            const isFavorite = favorite.includes(item.id);
            return (
              <CardNews
                item={item}
                addFavorite={this.props.addFavoriteAction}
                isFavorite={isFavorite}
                onPress={() =>
                  this.props.navigation.navigate('NewsLearnMore', {id: item.id})
                }
              />
            );
          }}
          onEndReached={() => this.getNextPage()}
          onEndReachedThreshold={2}
          keyExtractor={item => item.id.toString()}
        />
      </Screen>
    );
  }
}

const connector = connect(
  state => ({
    news: state.newsReducer.news,
    isRequested: state.newsReducer.isRequested,
    favorite: state.newsReducer.favorite,
  }),
  {
    getNewsAction: getNewsAction,
    addFavoriteAction: addFavoriteAction,
  },
);

export default connector(News);
