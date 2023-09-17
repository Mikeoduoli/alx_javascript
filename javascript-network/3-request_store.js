#!/usr/bin/node



const request = require ('request');
const fs = require ('fs');


url = process.argv[2];
file_name = process.argv[3];

request.get(url).pipe(fs.createWriteStream(file_name));