# LTS Node package is boron
FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Copy app source
COPY . /usr/src/app

# Server runs on port 5005 in dev mode
EXPOSE 5005
CMD [ "npm", "run", "server" ]
