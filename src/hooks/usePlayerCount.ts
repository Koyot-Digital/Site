import { useState, useEffect } from 'react';

const UNIVERSE_ID = '5502317457';
const GAME_STATS_URL = `/api/roblox/v1/games?universeIds=${UNIVERSE_ID}`;

export function useGameStats() {
  const [playerCount, setPlayerCount] = useState<number | null>(null);
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    const fetchGameStats = async () => {
      try {
        const response = await fetch(GAME_STATS_URL);
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
          const gameData = data.data[0];
          setPlayerCount(gameData.playing || 0);
          setVisits(gameData.visits || 0);
        }
      } catch (error) {
        console.error('Failed to fetch game stats:', error);
        setPlayerCount(null);
        setVisits(null);
      }
    };

    // Fetch immediately
    fetchGameStats();

    // Update every 30 seconds
    const interval = setInterval(fetchGameStats, 30000);

    return () => clearInterval(interval);
  }, []);

  return { playerCount, visits };
}