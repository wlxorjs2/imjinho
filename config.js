const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const API_KEY = config.API_KEY;
exports.API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzNzU4NmNlMC0wMGRmLTAxM2QtNjY1OS03Mjg4MjY0ZTZmZDAiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNzE3MDkzMjI4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Ii1iNzhjYTNjOC1mOTJhLTQ0OGQtYjk4YS0yMjJjYmNlMzQ5ZTQifQ.1FaQ1WChB42iVhwgJKmza8JYZ6qBs0JaJaRrt6-NIOs';
