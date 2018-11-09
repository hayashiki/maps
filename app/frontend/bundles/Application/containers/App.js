import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Util } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import MainMap from './MainMap';
import Api from '../utilities/Api';

import { fetchAllData } from '../actions/status';

import styles from './App.module.scss';

Util.setGlobalCssModule(styles);

class App extends Component {
  static propTypes = {
    initialProps: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }).isRequired,
    fetchAllData: PropTypes.func.isRequired,
  }

  componentWillMount() {
    Api.setAuthCookie(this.props.initialProps.token);
    this.props.fetchAllData();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/map" component={MainMap} />
      </Switch>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchAllData,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    location: state.router.location.pathname,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
