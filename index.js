const express = require('express');
const app = express();
const {PubSub} = require('@google-cloud/pubsub');

(async function() {
  this.pubsub = new PubSub();
  let topics = await this.pubsub.getTopics();
  console.log('topics loaded', topics.length);
})();

app.get('/', (req, res) => {
  console.log('Hello world received a request.');

  const target = process.env.TARGET || 'World';
  res.send(`Hello ${target}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});