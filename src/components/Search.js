import React from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';

import {addFavoriteAction} from '../actions/addFavorite';
import {getSearch} from '../actions/api';
import InputText from '../ui/InputText';
import CardSearch from '../ui/CardSearch';
import Screen from '../ui/Screen';
import EmptyList from '../ui/EmptyList';

class Search extends React.Component {
  state = {
    page: 1,
    maxPage: 1,
    searchText: '',
    result: null,
  };

  getNextPage() {
    if (this.state.page < this.state.maxPage) {
      this.props
        .getSearch(
          this.props.currentCity.slug,
          this.state.searchText,
          '',
          '',
          this.state.page + 1,
        )
        .then(req => {
          this.setState(prev => {
            return {
              page: prev.page + 1,
              result: [...prev.result, ...req.results],
            };
          });
        })
        .catch(e => {});
    }
  }

  search() {
    const uploadItem = 20;
    if (this.state.searchText.trim().length > 1) {
      this.props
        .getSearch(this.props.currentCity.slug, this.state.searchText)
        .then(req => {
          this.setState({
            result: req.results,
            maxPage: Math.ceil(req.count / uploadItem),
            page: 1,
          });
        })
        .catch(e => {});
    }
  }

  render() {
    const {isRequested, navigation, favorite, addFavoriteAction} = this.props;
    return (
      <Screen>
        <InputText
          value={this.state.searchText}
          onChange={text => this.setState({searchText: text})}
          onSearch={() => this.search()}
        />
        <FlatList
          refreshing={isRequested}
          data={this.state.result}
          renderItem={({item, index}) => {
            if (item.ctype === 'news') {
              return null;
            }
            const isFavorite = favorite.find(favor => favor.id === item.id);
            return (
              <CardSearch
                item={item}
                onPress={() => {
                  navigation.navigate('SearchLearnMore', {item});
                }}
                isFavorite={!!isFavorite}
                addFavorite={addFavoriteAction}
              />
            );
          }}
          ListEmptyComponent={
            Array.isArray(this.state.result) && !this.state.result.length ? (
              <EmptyList text="Ничего не найдено" />
            ) : null
          }
          onEndReached={() => !isRequested && this.getNextPage()}
          onEndReachedThreshold={1}
          keyExtractor={item => item.title}
        />
      </Screen>
    );
  }
}

const connector = connect(
  state => ({
    isRequested: state.networkReducer.isRequested,
    currentCity: state.settingsReducer.currentCity,
    favorite: state.newsReducer.favorite,
  }),
  {
    getSearch: getSearch,
    addFavoriteAction: addFavoriteAction,
  },
);

export default connector(Search);
