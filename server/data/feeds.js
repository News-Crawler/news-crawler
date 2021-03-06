const feeds = [
  {
    id: 3,
    name: "Ars Technica",
    rss_url: "http://feeds.arstechnica.com/arstechnica/index",
    homepage_url: "http://arstechnica.com/",
    image_url: "ars-technica.png"
  },
  {
    id: 5,
    name: "BBC",
    rss_url: "http://feeds.bbci.co.uk/news/rss.xml",
    homepage_url: "http://www.bbc.com/news",
    image_url: "bbc-news.png"
  },
  {
    id: 24,
    name: "CNBC",
    rss_url: "http://www.cnbc.com/id/100003114/device/rss/rss.html",
    homepage_url: "http://www.cnbc.com/",
    image_url: "cnbc.png"
  },
  {
    id: 8,
    name: "CNN",
    rss_url: "http://rss.cnn.com/rss/cnn_topstories.rss",
    homepage_url: "http://www.cnn.com/",
    image_url: "cnn.jpg"
  },
  {
    id: 9,
    name: "ESPN",
    rss_url: "http://sports.espn.go.com/espn/rss/news",
    homepage_url: "http://espn.go.com/",
    image_url: "espn.png"
  },
  {
    id: 21,
    name: "Entertainment Tonight",
    rss_url: "http://feeds.feedburner.com/EtsBreakingNews",
    homepage_url: "http://www.etonline.com/news/",
    image_url: "etonline.png"
  },
  {
    id: 26,
    name: "Fox News",
    rss_url: "http://feeds.foxnews.com/foxnews/latest",
    homepage_url: "http://www.foxnews.com/",
    image_url: "fox-news.jpg"
  },
  {
    id: 29,
    name: "GQ",
    rss_url: "http://www.gq.com/rss",
    homepage_url: "http://www.gq.com/",
    image_url: "gq.png"
  },
  {
    id: 16,
    name: "Glamour",
    rss_url: "http://feeds.glamour.com/glamour/glamour_all",
    homepage_url: "http://www.glamour.com/",
    image_url: "glamour.png"
  },
  {
    id: 19,
    name: "Hacker News",
    rss_url: "https://news.ycombinator.com/rss",
    homepage_url: "https://news.ycombinator.com/",
    image_url: "hacker-news.png"
  },
  {
    id: 4,
    name: "Los Angeles Times",
    rss_url: "http://www.latimes.com/rss2.0.xml",
    homepage_url: "http://www.latimes.com/",
    image_url: "los-angeles-times.png"
  },
  {
    id: 2,
    name: "Mashable",
    rss_url: "http://feeds.mashable.com/Mashable",
    homepage_url: "http://mashable.com/",
    image_url: "mashable.png"
  },
  {
    id: 32,
    name: "Men's Journal",
    rss_url: "http://www.mensjournal.com/services/rss/latest",
    homepage_url: "http://www.mensjournal.com/",
    image_url: "mens-journal.png"
  },
  {
    id: 6,
    name: "NPR",
    rss_url: "http://www.npr.org/rss/rss.php?id=1001",
    homepage_url: "http://www.npr.org/sections/news/",
    image_url: "npr.png"
  },
  {
    id: 14,
    name: "New York Review of Books",
    rss_url: "http://feeds.feedburner.com/nybooks",
    homepage_url: "http://www.nybooks.com/",
    image_url: "nyrb.png"
  },
  {
    id: 20,
    name: "New York Times",
    rss_url: "http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
    homepage_url: "http://www.nytimes.com/",
    image_url: "nyt.png"
  },
  {
    id: 27,
    name: "Paris Review",
    rss_url: "http://feeds.feedburner.com/TheParisReviewBlog",
    homepage_url: "http://www.theparisreview.org/",
    image_url: "paris-review.png"
  },
  {
    id: 7,
    name: "Reuters",
    rss_url: "http://feeds.reuters.com/reuters/topNews",
    homepage_url: "http://www.reuters.com/news",
    image_url: "reuters.png"
  },
  {
    id: 34,
    name: "Sports Illustrated",
    rss_url: "http://www.si.com/rss/si_topstories.rss",
    homepage_url: "http://www.si.com/",
    image_url: "sports-illustrated.png"
  },
  {
    id: 23,
    name: "TMZ",
    rss_url: "http://www.tmz.com/rss.xml",
    homepage_url: "http://www.tmz.com/",
    image_url: "tmz.png"
  },
  {
    id: 28,
    name: "The Atlantic",
    rss_url: "http://feeds.feedburner.com/TheAtlantic",
    homepage_url: "http://www.theatlantic.com/",
    image_url: "the-atlantic.png"
  },
  {
    id: 25,
    name: "The Economist",
    rss_url: "http://www.economist.com/sections/business-finance/rss.xml",
    homepage_url: "http://www.economist.com/",
    image_url: "the-economist.png"
  },
  {
    id: 13,
    name: "The New Yorker",
    rss_url: "http://www.newyorker.com/feed/news",
    homepage_url: "http://www.newyorker.com/",
    image_url: "the-new-yorker.png"
  },
  {
    id: 1,
    name: "The Verge",
    rss_url: "http://www.theverge.com/rss/index.xml",
    homepage_url: "http://www.theverge.com/",
    image_url: "the-verge.png"
  },
  {
    id: 22,
    name: "Us Weekly",
    rss_url: "http://www.usmagazine.com/entertainment/atom",
    homepage_url: "http://www.usmagazine.com/entertainment/news",
    image_url: "us-weekly.png"
  },
  {
    id: 36,
    name: "Vogue",
    rss_url: "https://www.vogue.com/feed/",
    homepage_url: "http://www.vogue.com/",
    image_url: "vogue.png"
  },
  {
    id: 10,
    name: "Wall Street Journal",
    rss_url: "http://www.wsj.com/xml/rss/3_7085.xml",
    homepage_url: "http://www.wsj.com/",
    image_url: "wsj.png"
  },
  {
    id: 12,
    name: "Yahoo News",
    rss_url: "http://news.yahoo.com/rss/",
    homepage_url: "http://news.yahoo.com/",
    image_url: "yahoo.png"
  },
  {
    id: 18,
    name: "Yahoo Sports",
    rss_url: "https://sports.yahoo.com/top/rss.xml",
    homepage_url: "http://sports.yahoo.com/",
    image_url: "yahoo-sports.png"
  }
];

module.exports = feeds;

// feed-read can't figure these out
const unused = [
  {
    id: 35,
    name: "Cosmpolitan",
    rss_url: "http://www.cosmopolitan.com/rss/all.xml",
    homepage_url: "http://www.cosmopolitan.com/",
    image_url: "cosmopolitan.png"
  },
  {
    id: 15,
    name: "Elle",
    rss_url: "http://www.elle.com/rss/all.xml",
    homepage_url: "http://www.elle.com/",
    image_url: "elle.png"
  },
  {
    id: 30,
    name: "Esquire",
    rss_url: "http://www.esquire.com/rss/all.xml",
    homepage_url: "http://www.esquire.com/",
    image_url: "esquire.png"
  },
  {
    id: 11,
    name: "Financial Times",
    rss_url: "http://www.ft.com/rss/home/us",
    homepage_url: "http://www.ft.com/home/us",
    image_url: "financial-times.png"
  },
  { // this one throws an error for an unexpected ;
    id: 33,
    name: "Fox Sports",
    rss_url: "http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU",
    homepage_url: "http://www.foxsports.com/",
    image_url: "fox-sports.jpg"
  },
  {
    id: 17,
    name: "Hollywood Reporter",
    rss_url: "http://feeds.feedburner.com/thr/news",
    homepage_url: "http://www.hollywoodreporter.com/",
    image_url: "hollywood-reporter.png"
  },
  {
    id: 31,
    name: "Ask Men",
    rss_url: "http://www.askmen.com/homepage.xml",
    homepage_url: "http://www.askmen.com/",
    image_url: "ask-men.png"
  },
];
