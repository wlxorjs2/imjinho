// main.js
import { getPlayerData } from './player.js';
import { getMatchData } from './match.js';

const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzNzU4NmNlMC0wMGRmLTAxM2QtNjY1OS03Mjg4MjY0ZTZmZDAiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNzE3MDkzMjI4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Ii1iNzhjYTNjOC1mOTJhLTQ0OGQtYjk4YS0yMjJjYmNlMzQ5ZTQifQ.1FaQ1WChB42iVhwgJKmza8JYZ6qBs0JaJaRrt6-NIOs';
const playerName = 'shacomadmovie';

async function main() {
  try {
    const playerData = await getPlayerData(apiKey, playerName);
    console.log('Player Data:', playerData);

    const matchData = await getMatchData(apiKey, playerData.playerMatchIds);
    console.log('Match Data:', matchData);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
