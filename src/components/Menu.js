import React from 'react';
import {connect} from 'react-redux';

import {getCityListAction} from '../actions/getCityListAction';
import Scroll from '../ui/Scroll';
import CityesList from '../ui/CityesList';

class Menu extends React.Component {
  componentDidMount() {
    this.props.getCityListAction();
  }

  render() {
    return (
      <Scroll>
        <CityesList city={this.props.city} cityes={this.props.cityes} />
      </Scroll>
    );
  }
}

const connector = connect(
  state => ({
    cityes: state.settingsReducer.cityes,
    city: state.settingsReducer.currentCity,
  }),
  {
    getCityListAction: getCityListAction,
  },
);

export default connector(Menu);
