export const getMatchData = async (apiKey, matchIds, fetch) => {
    const matchPromises = matchIds.map(async (matchId) => {
      const response = await fetch(`https://api.pubg.com/shards/steam/matches/${matchId}`, {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      });
      const matchData = await response.json();
      const matchDuration = matchData.data.attributes.duration;
      const matchCreatedAt = matchData.data.attributes.createdAt;
  
      return {
        matchDuration,
        matchCreatedAt
      };
    });
  
    const matchData = await Promise.all(matchPromises);
    return matchData;
  };