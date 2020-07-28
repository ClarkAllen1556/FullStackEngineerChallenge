var mails = require('./src/assets/mails.json')

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

for(let i = 0; i < mails.length; i++) {
  mails[i].received = randomDate(new Date(2020, 4, 20), new Date())
  mails[i].id = i;
}

console.log(JSON.stringify(mails))
