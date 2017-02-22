import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import selectN from 'selectn';
import { requestAllArticles } from '../actions';
import Auth from './Auth';
import NewsSource from './NewsSource';

class Home extends Component {

  componentWillMount() {
    this.props.requestAllArticles();
  }

  render() {
    return (
      <div>
        {!this.props.loggedIn && <Auth />}
        {this.props.feed.map(source => (
          <NewsSource {...source} key={source.id} />
        ))}
      </div>
    );
  }

}

export default compose (
  DragDropContext(HTML5Backend),
  connect(({ feed, auth }) => ({
    feed,
    loggedIn: !!(selectN('user.username', auth)),
  }), { requestAllArticles })
)(Home);
