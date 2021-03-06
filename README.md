# News Crawler

Crawl the news

# Developoment

## Getting started

 - Clone this respository
 - Make sure you're running at least Node 6.x and NPM 3.x
 - Easily run multiple node versions using [nvm](https://github.com/creationix/nvm/blob/master/README.markdown)
 - run `npm isntall`, or if you have [yarn](https://code.facebook.com/posts/1840075619545360) installed locally, run `yarn`

## API

 - Run `npm run server` to start the API server 
 - Server will listen on port 5005
 - The production build of the front-end will be running at `localhost:5005`

## Environment Variables

 - `DB_URI`: Connection string for a MongoDB database.
   - Defaults to `localhost/newsCrawlerDB`.
   - `mongod` or the equivalent needs to be running to use a local database
 - `SECRET`: secret key used to generate secure JSON Web Tokens
 - `NODE_ENV`: set to `production` to run production server on port 80

## User Interface

 - To run the front-end development server:
   - Run `npm start`
   - A new browser window will open to `localhost:3000`
 - API calls will proxy to `localhost:5005`
 - Bootstrapped with [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
 - Run tests: `npm run test`

## Build and run in a Docker container

 - `cd` to the top level of this repo's directory (where this file is)
 - Run `docker build -t news/news-scraper .`  (Don't miss the `.` - that tells it where to build). This will take a minute
 - Run `docker run -p 49160:5005 -d news/news-scraper`
  - `-p` binds port 5005 of the app _in_ the container to port 49160 of the host machine
  - `-d` "detaches" - runs the container in the background
 - Run `docker ps` to see Container info
 - Open [localhost:49160](http://localhost:49160) to view the app running in the Docker container, in the browser.
 