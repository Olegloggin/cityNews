import React from 'react';
import {connect} from 'react-redux';

import NewsContent from '../ui/NewsContent';
import {addFavoriteAction} from '../actions/addFavorite';

const NewsScreen = ({navigation, news, addFavoriteAction, favorite}) => {
  const thisNews = news.filter(item => item.id === navigation.state.params.id);
  const isFavorite = favorite.includes(thisNews[0].id);
  return (
    <NewsContent
      {...thisNews[0]}
      addFavorite={addFavoriteAction}
      isFavorite={isFavorite}
    />
  );
};

const connector = connect(
  state => ({
    news: state.newsReducer.news,
    favorite: state.newsReducer.favorite,
  }),
  {
    addFavoriteAction: addFavoriteAction,
  },
);

export default connector(NewsScreen);
