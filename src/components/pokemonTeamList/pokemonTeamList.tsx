import { useAppContext } from "../../context/appContext";
import { IPokemon } from "../../types/types";
import ACTIONS from "../../context/appActions";
import "./styles.styl";
import PokemonItem from "../pokemonGrid/pokemonItem";

function PokemonTeamList() {
  const {
    dispatch,
    store: { pokemonTeam },
  } = useAppContext();

  const resetPokemonList = () => dispatch({ type: ACTIONS.RESET_STATE });

  return (
    <>
      <div className="pokemon-list-container">
        <button onClick={() => resetPokemonList()}> Reset PokemonList</button>
        <div className="pokemon-list-grid">
          {pokemonTeam.map((item: IPokemon) => (
            <PokemonItem item={item} isList />
          ))}
        </div>
      </div>
    </>
  );
}

export default PokemonTeamList;
