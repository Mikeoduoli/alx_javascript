#!/usr/bin/env node

const request = require('request');


if (process.argv.length < 3) {
  console.error('Usage: node starwars_count.js <api_url>');
  process.exit(1);
}


const apiUrl = process.argv[2];


request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('HTTP Status Code:', response.statusCode);
  } else {
    try {
      
      const filmsData = JSON.parse(body);

      const moviesWithWedgeAntilles = filmsData.results.filter((movie) =>
        movie.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
      );

      
      console.log(moviesWithWedgeAntilles.length);
    } catch (parseError) {
      console.error('Error parsing JSON response:', parseError);
    }
  }
});