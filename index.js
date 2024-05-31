import { getPlayerData } from './api/player.js';
import { getMatchData } from './api/match.js';

const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzNzU4NmNlMC0wMGRmLTAxM2QtNjY1OS03Mjg4MjY0ZTZmZDAiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNzE3MDkzMjI4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Ii1iNzhjYTNjOC1mOTJhLTQ0OGQtYjk4YS0yMjJjYmNlMzQ5ZTQifQ.1FaQ1WChB42iVhwgJKmza8JYZ6qBs0JaJaRrt6-NIOs';
const username = 'shacomadmovie';

async function main() {
  try {
    const playerData = await getPlayerData(apiKey, username, fetch);
    console.log('Player Data:');
    console.log('Name:', playerData.playerFullName);
    console.log('Stats:', playerData.playerStats);

    const matchData = await getMatchData(apiKey, playerData.playerMatchIds, fetch);
    console.log('Match Data:');
    matchData.forEach(match => {
      console.log('Duration:', match.matchDuration, 'seconds');
      console.log('Created At:', match.matchCreatedAt);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
