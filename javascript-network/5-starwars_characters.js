#!/usr/bin/node

const request = require('request');

ID = process.argv[2];
const apiUrl = 'https://swapi-api.alx-tools.com/api/films/'+ID;
const actors =[];

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
    return;
  }

  try {
    const data = JSON.parse(body);
    actors.push(data.characters);
  } catch (e) {
    console.error('Error parsing JSON:', e);
  }

  actors[0].forEach(function (actor) {
    request.get(actor, (error, response, body) => {
        if (error) {
          console.error('Error:', error);
          return;
        }
      
        if (response.statusCode !== 200) {
          console.error('Request failed with status code:', response.statusCode);
          return;
        }
      
        try {
          const data = JSON.parse(body);
          console.log(data.name);
        } catch (e) {
          console.error('Error parsing JSON:', e);
        }
    })
  })
});