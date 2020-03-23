import React from 'react';
import {connect} from 'react-redux';

import ErrorTost from '../ui/ErrorTost';

class Error extends React.Component {
  render() {
    const {isError, errorText} = this.props;
    return <ErrorTost isError={isError} errorText={errorText} />;
  }
}

const connector = connect(state => ({
  errorText: state.errorReducer.errorText,
  isError: state.errorReducer.isError,
}));

export default connector(Error);
