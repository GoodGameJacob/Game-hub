import { Text, SimpleGrid } from "@chakra-ui/react";
import usegames from "../hooks/useGames";
import GameCard from "../components/GameCard";

const GameGrid = () => {
  const { games, error } = usegames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
