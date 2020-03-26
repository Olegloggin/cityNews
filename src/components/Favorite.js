import React from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';

import {addFavoriteAction} from '../actions/addFavorite';
import Screen from '../ui/Screen';
import CardNews from '../ui/CardNews';
import EmptyList from '../ui/EmptyList';

class Favorite extends React.Component {
  render() {
    const {news, favorite} = this.props;
    const favoriteNews = news.filter(item => favorite.includes(item.id));
    return (
      <Screen>
        {favoriteNews.length ? (
          <FlatList
            data={favoriteNews}
            renderItem={({item}) => {
              const isFavorite = favorite.includes(item.id);
              return (
                <CardNews
                  item={item}
                  addFavorite={this.props.addFavoriteAction}
                  isFavorite={isFavorite}
                  onPress={() =>
                    this.props.navigation.navigate('NewsLearnMore', {
                      id: item.id,
                    })
                  }
                />
              );
            }}
            keyExtractor={item => item.id.toString()}
          />
        ) : (
          <EmptyList />
        )}
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
