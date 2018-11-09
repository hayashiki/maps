import React from 'react';
import { Col, Row } from 'reactstrap';

/**
 * Renders the Loading page
 */
const Loading = () => (
  <Row>
    <Col xs="12" className="p-5 text-center">
      <h2>
        <i className="fa fa-spin fa-cog" />
        {' '}
        Loading...
      </h2>
    </Col>
  </Row>
);

export default Loading;
