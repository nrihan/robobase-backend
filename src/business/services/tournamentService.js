function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function generateInitialMatches(robots) {
    const shuffledRobots = fisherYatesShuffle([...robots]);
    const initialMatches = [];
  
    for (let i = 0; i < shuffledRobots.length; i += 2) {
      const match = {
        robot1: shuffledRobots[i],
        robot2: shuffledRobots[i + 1],
        winner: null,
      };
      initialMatches.push(match);
    }
  
    return initialMatches;
  }
  
  module.exports = {
    fisherYatesShuffle,
    generateInitialMatches,
  };
  