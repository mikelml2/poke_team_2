import PokemonTeamList from "../components/pokemonTeamList/pokemonTeamList";
import PokemonGrid from "../components/pokemonGrid/pokemonGrid";
import "../App.css";
function Home() {
  return (
    <>
      <PokemonGrid></PokemonGrid>
      <PokemonTeamList></PokemonTeamList>
    </>
  );
}

export default Home;
