import { Text } from "@chakra-ui/react";
import usegames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = usegames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
