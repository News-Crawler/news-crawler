import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Glyphicon } from 'react-bootstrap';
import { toggleExpanded, toggleMore } from '../actions';
import { createSource, createTarget } from './drag';
import ArticleList from './ArticleList';

const NewsSource = ({
  more, expanded, name, id, toggleMore, toggleExpanded, articles, loading,
  connectDragSource, connectDropTarget }) => {

  if (articles.length === 0) return null;

  const toggleButton = loading ? 'refresh' : (expanded ? 'chevron-up' : 'chevron-down');
  const style = expanded ? null : { borderBottom: '1px solid #CCC' };

  return connectDragSource(connectDropTarget((
    <section>
      <Row style={style}>
        <Col xs={12} className="source-title">
          <h3>
            {name}{' '}
            <Glyphicon glyph={toggleButton} className="pull-right clickable icon" onClick={() => toggleExpanded(id)} />
          </h3>
        </Col>
        {expanded && <ArticleList name={name} articles={articles} more={more} toggleMore={() => toggleMore(id)} />}
      </Row>
    </section>
  )));

}

const mapStateToProps = ({ feed }, { id }) => {
  const { expanded, more, articles, loading } = feed.find(s => s.id === id);
  return {
    expanded,
    more,
    articles,
    loading
  };
};

const dispatchProps = {
  toggleMore,
  toggleExpanded
};

export default compose(
  createSource,
  createTarget,
  connect(mapStateToProps, dispatchProps)
)(NewsSource);
