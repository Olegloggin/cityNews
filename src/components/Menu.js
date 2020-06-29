import React from 'react';
import {connect} from 'react-redux';

import {getCityListAction} from '../actions/getCityListAction';
import {changeCityAction} from '../actions/changeCityAction';
import Scroll from '../ui/Scroll';
import CityesList from '../ui/CityesList';

class Menu extends React.Component {
  componentDidMount() {
    this.props.getCityListAction();
  }

  render() {
    const {cityes, city, changeCityAction} = this.props;
    return (
      <Scroll>
        <CityesList
          city={city}
          cityes={cityes}
          changeCityAction={changeCityAction}
        />
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
    changeCityAction: changeCityAction,
  },
);

export default connector(Menu);
