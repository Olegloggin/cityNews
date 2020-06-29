import React from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';

import {getNewsAction} from '../actions/getNewsAction';
import {addFavoriteAction} from '../actions/addFavorite';
import Screen from '../ui/Screen';
import CardNews from '../ui/CardNews';
import EmptyList from '../ui/EmptyList';

class News extends React.Component {
  state = {page: 1};
  initialPage = 1;
  currentCity = this.props.currentCity.slug;
  getNewsAction = this.props.getNewsAction;

  componentDidMount() {
    this.getNewsAction(this.initialPage, this.currentCity);
  }

  componentDidUpdate(prev) {
    this.currentCity = this.props.currentCity.slug;
    if (prev.currentCity.slug !== this.currentCity) {
      this.getNewsAction(this.initialPage, this.currentCity);
      this.upToTopList();
    }
  }

  refresh() {
    this.getNewsAction(this.initialPage, this.currentCity);
  }

  getNextPage() {
    this.setState(prev => {
      this.getNewsAction(prev.page + 1, this.currentCity);
      return {page: prev.page + 1};
    });
  }

  upToTopList() {
    this.flatListRef.scrollToIndex({index: 0});
  }

  render() {
    const {
      news,
      isRequested,
      favorite,
      addFavoriteAction,
      navigation,
    } = this.props;

    return (
      <Screen>
        <FlatList
          ref={ref => (this.flatListRef = ref)}
          onRefresh={() => this.refresh()}
          refreshing={isRequested}
          data={news}
          renderItem={({item}) => {
            const isFavorite = favorite.find(favor => favor.id === item.id);
            return (
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
          ListEmptyComponent={<EmptyList text="Список пока пуст" />}
          contentContainerStyle={!news.length && {flex: 1}}
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
    isRequested: state.networkReducer.isRequested,
    favorite: state.newsReducer.favorite,
    currentCity: state.settingsReducer.currentCity,
  }),
  {
    getNewsAction: getNewsAction,
    addFavoriteAction: addFavoriteAction,
  },
);

export default connector(News);
