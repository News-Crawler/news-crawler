import React from 'react';

import { Row, Col, Jumbotron } from 'react-bootstrap';

const About = () => {

  const style = {
    margin: '0 -15px 1em',
    borderRadius: 0
  };

  return(
    <Row>
      <Col xs={12}>
        <Jumbotron style={style}>
          <h3>
            Crawl the news.
          </h3>
        </Jumbotron>
      </Col>
    </Row>
  );
};

export default About;
