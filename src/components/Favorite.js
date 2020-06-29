import React from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';

import {addFavoriteAction} from '../actions/addFavorite';
import Screen from '../ui/Screen';
import CardNews from '../ui/CardNews';
import CardSearch from '../ui/CardSearch';
import EmptyList from '../ui/EmptyList';

class Favorite extends React.Component {
  render() {
    const {favorite, addFavoriteAction, navigation} = this.props;
    return (
      <Screen>
        {favorite.length ? (
          <FlatList
            data={favorite}
            renderItem={({item}) => {
              const isFavorite = favorite.find(favor => favor.id === item.id);
              return item.ctype ? (
                <CardSearch
                  item={item}
                  onPress={() => {
                    navigation.navigate('SearchLearnMore', {item});
                  }}
                  isFavorite={!!isFavorite}
                  addFavorite={addFavoriteAction}
                />
              ) : (
                <CardNews
                  item={item}
                  addFavorite={addFavoriteAction}
                  isFavorite={!!isFavorite}
                  onPress={() =>
                    navigation.navigate('NewsLearnMore', {id: item.id})
                  }
                />
              );
            }}
            keyExtractor={item => item.id.toString()}
          />
        ) : (
          <EmptyList text="Список пока пуст" />
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
