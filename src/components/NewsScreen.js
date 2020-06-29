import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import NewsContent from '../ui/NewsContent';
import {addFavoriteAction} from '../actions/addFavorite';

const NewsScreen = ({navigation, news, addFavoriteAction, favorite}) => {
  const [copyIsFavorite, setCopyIsFavorite] = useState();
  let foundNews = news.find(item => item.id === navigation.state.params.id);
  let isFavorite;

  if (!foundNews) {
    foundNews = favorite.find(item => item.id === navigation.state.params.id);
    isFavorite = !!foundNews && true;
  } else {
    isFavorite = !!favorite.find(
      item => item.id === navigation.state.params.id,
    );
  }

  useEffect(() => {
    const blur = navigation.addListener('didBlur', () => {
      if (isFavorite !== copyIsFavorite) {
        addFavoriteAction(foundNews);
      }
    });

    return () => blur.remove();
  });

  useEffect(() => {
    setCopyIsFavorite(isFavorite);
  }, [foundNews, isFavorite]);

  if (!foundNews) {
    navigation.navigate('News');
    return null;
  }

  const preAddFavoriteAction = data => {
    setCopyIsFavorite(!copyIsFavorite);
  };

  return (
    <NewsContent
      item={foundNews}
      addFavorite={preAddFavoriteAction}
      isFavorite={copyIsFavorite}
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
