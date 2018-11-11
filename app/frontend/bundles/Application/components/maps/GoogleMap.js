import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import PropTypes from 'prop-types';

export class MapContainer extends Component {
  static propTypes ={
    google: PropTypes.object.isRequired,
  }

  render() {
    return (
      <Map google={this.props.google} zoom={14} />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCLrcChFxYR2JEKl78n5hXincTOIjWnGEE'),
})(MapContainer);
