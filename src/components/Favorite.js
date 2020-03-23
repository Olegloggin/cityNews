import React from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';

import {addFavoriteAction} from '../actions/addFavorite';
import Screen from '../ui/Screen';
import CardNews from '../ui/CardNews';

class Favorite extends React.Component {
  render() {
    const {news, favorite} = this.props;
    const favoriteNews = news.filter(item => favorite.includes(item.id));
    return (
      <Screen>
        <FlatList
          data={favoriteNews}
          renderItem={({item}) => {
            const isFavorite = favorite.includes(item.id);
            return (
              <CardNews
                item={item}
                addFavorite={this.props.addFavoriteAction}
                isFavorite={isFavorite}
              />
            );
          }}
          keyExtractor={item => item.id.toString()}
        />
      </Screen>
    );
  }
}

const connector = connect(
  state => ({
    news: state.newsReducer.news,
    favorite: state.newsReducer.favorite,
  }),
  {
    addFavoriteAction: addFavoriteAction,
  },
);

export default connector(Favorite);
