const password = require('./password');

const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.twitter.com')
  .wait(5000)
  .type('input[name="session[username_or_email]"]', `${password.username}`)
  .wait(2000)
  .click('input[type=\'password\']')
  .wait(2000)
  .type('input[type=\'password\']', `${password.password}`)
  .click('div.css-18t94o4')
  .wait(8000)
  .evaluate(function (result, done) {
    let tweets = Array.from(document.querySelectorAll('span.css-901oao'))
    .map(tweet => tweet.innerText.trim())
    return tweets
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Something went wrong')
  });