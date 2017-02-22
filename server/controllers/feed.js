const feed = require('../data/feeds');
var readFeed = require('feed-read');

const { sendJSONResponse } = require('./util');

const articles = ({ query: { url, qty } = {} }, res, next) => {
  return readFeed(url, (err, articles) => {
    if (err) return console.error(err);
    // Each article has the following properties:
    //
    //   * "title"     - The article title (String).
    //   * "author"    - The author's name (String).
    //   * "link"      - The original article link (String).
    //   * "content"   - The HTML content of the article (String).
    //   * "published" - The date that the article was published (Date).
    //   * "feed"      - {name, source, link}
    //
    return sendJSONResponse(200, articles)(null, res);
  });

};

const controller = {
  home: sendJSONResponse(200, { message: 'News Crawler API' }),
  feed: sendJSONResponse(200, feed),
  articles
};

module.exports = controller;
