import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

import Loading from './shared/Loading';
import GoogleMap from './maps/GoogleMap';

export default class MainMap extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    document.title = 'Map';
  }

  render() {
    if (this.props.isLoading) {
      return (
        <Container fluid>
          <Loading />
        </Container>
      );
    }

    return (
      <Container fluid>
        <Row>
          <Col xs="12">
            <h1>Loaded data.</h1>
            <GoogleMap />
          </Col>
        </Row>
      </Container>
    );
  }
}
