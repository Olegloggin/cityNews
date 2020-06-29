import React from 'react';
import {connect} from 'react-redux';

import SearchContent from '../ui/SearchContent';
import {addFavoriteAction} from '../actions/addFavorite';

const SearchScreen = ({navigation, addFavoriteAction, favorite}) => {
  const item = navigation.state.params.item;
  const isFavorite = favorite.find(favor => favor.id === item.id);
  return (
    <SearchContent
      item={item}
      isFavorite={!!isFavorite}
      addFavoriteAction={addFavoriteAction}
    />
  );
};

const connector = connect(
  state => ({
    favorite: state.newsReducer.favorite,
  }),
  {
    addFavoriteAction: addFavoriteAction,
  },
);

export default connector(SearchScreen);
