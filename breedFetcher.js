const request = require('request');
const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
const userInput = process.argv.slice(2);
const finalURL = URL + userInput;


request(finalURL, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  console.log(typeof body);
  console.log("------------------ body -----------");
  console.log(body);
  const data = JSON.parse(body);
  console.log(typeof data);
  console.log(data[0]);
});

  





